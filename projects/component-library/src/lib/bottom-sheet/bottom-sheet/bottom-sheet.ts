/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import {
  ComponentPortal,
  ComponentType,
  TemplatePortal,
} from '@angular/cdk/portal';
import {
  ComponentRef,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  OnDestroy,
  Optional,
  SkipSelf,
  StaticProvider,
  TemplateRef,
} from '@angular/core';
import { of as observableOf } from 'rxjs';
import {
  SfBottomSheetConfig,
  SF_BOTTOM_SHEET_DATA,
} from './bottom-sheet-config';
import { SfBottomSheetContainer } from './bottom-sheet-container';
import { SfBottomSheetModule } from './bottom-sheet-module';
import { SfBottomSheetRef } from './bottom-sheet-ref';

/** Injection token that can be used to specify default bottom sheet options. */
export const SF_BOTTOM_SHEET_DEFAULT_OPTIONS = new InjectionToken<
  SfBottomSheetConfig
>('mat-bottom-sheet-default-options');

/**
 * Service to trigger Material Design bottom sheets.
 */
@Injectable({ providedIn: SfBottomSheetModule })
export class SfBottomSheet implements OnDestroy {
  private _bottomSheetRefAtThisLevel: SfBottomSheetRef<any> | null = null;

  /** Reference to the currently opened bottom sheet. */
  get _openedBottomSheetRef(): SfBottomSheetRef<any> | null {
    const parent = this._parentBottomSheet;
    return parent
      ? parent._openedBottomSheetRef
      : this._bottomSheetRefAtThisLevel;
  }

  set _openedBottomSheetRef(value: SfBottomSheetRef<any> | null) {
    if (this._parentBottomSheet) {
      this._parentBottomSheet._openedBottomSheetRef = value;
    } else {
      this._bottomSheetRefAtThisLevel = value;
    }
  }

  constructor(
    private _overlay: Overlay,
    private _injector: Injector,
    @Optional() @SkipSelf() private _parentBottomSheet: SfBottomSheet,
    @Optional()
    @Inject(SF_BOTTOM_SHEET_DEFAULT_OPTIONS)
    private _defaultOptions?: SfBottomSheetConfig,
  ) {}

  /**
   * Opens a bottom sheet containing the given component.
   * @param component Type of the component to load into the bottom sheet.
   * @param config Extra configuration options.
   * @returns Reference to the newly-opened bottom sheet.
   */
  open<T, D = any, R = any>(
    component: ComponentType<T>,
    config?: SfBottomSheetConfig<D>,
  ): SfBottomSheetRef<T, R>;

  /**
   * Opens a bottom sheet containing the given template.
   * @param template TemplateRef to instantiate as the bottom sheet content.
   * @param config Extra configuration options.
   * @returns Reference to the newly-opened bottom sheet.
   */
  open<T, D = any, R = any>(
    template: TemplateRef<T>,
    config?: SfBottomSheetConfig<D>,
  ): SfBottomSheetRef<T, R>;

  open<T, D = any, R = any>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    config?: SfBottomSheetConfig<D>,
  ): SfBottomSheetRef<T, R> {
    const _config = _applyConfigDefaults(
      this._defaultOptions || new SfBottomSheetConfig(),
      config,
    );
    const overlayRef = this._createOverlay(_config);
    const container = this._attachContainer(overlayRef, _config);
    const ref = new SfBottomSheetRef<T, R>(container, overlayRef);

    if (componentOrTemplateRef instanceof TemplateRef) {
      container.attachTemplatePortal(
        new TemplatePortal<T>(componentOrTemplateRef, null!, {
          $implicit: _config.data,
          bottomSheetRef: ref,
        } as any),
      );
    } else {
      const portal = new ComponentPortal(
        componentOrTemplateRef,
        undefined,
        this._createInjector(_config, ref),
      );
      const contentRef = container.attachComponentPortal(portal);
      ref.instance = contentRef.instance;
    }

    // When the bottom sheet is dismissed, clear the reference to it.
    ref.afterDismissed().subscribe(() => {
      // Clear the bottom sheet ref if it hasn't already been replaced by a newer one.
      if (this._openedBottomSheetRef == ref) {
        this._openedBottomSheetRef = null;
      }
    });

    if (this._openedBottomSheetRef) {
      // If a bottom sheet is already in view, dismiss it and enter the
      // new bottom sheet after exit animation is complete.
      this._openedBottomSheetRef
        .afterDismissed()
        .subscribe(() => ref.containerInstance.enter());
      this._openedBottomSheetRef.dismiss();
    } else {
      // If no bottom sheet is in view, enter the new bottom sheet.
      ref.containerInstance.enter();
    }

    this._openedBottomSheetRef = ref;

    return ref;
  }

  /**
   * Dismisses the currently-visible bottom sheet.
   * @param result Data to pass to the bottom sheet instance.
   */
  dismiss<R = any>(result?: R): void {
    if (this._openedBottomSheetRef) {
      this._openedBottomSheetRef.dismiss(result);
    }
  }

  ngOnDestroy() {
    if (this._bottomSheetRefAtThisLevel) {
      this._bottomSheetRefAtThisLevel.dismiss();
    }
  }

  /**
   * Attaches the bottom sheet container component to the overlay.
   */
  private _attachContainer(
    overlayRef: OverlayRef,
    config: SfBottomSheetConfig,
  ): SfBottomSheetContainer {
    const userInjector =
      config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = Injector.create({
      parent: userInjector || this._injector,
      providers: [{ provide: SfBottomSheetConfig, useValue: config }],
    });

    const containerPortal = new ComponentPortal(
      SfBottomSheetContainer,
      config.viewContainerRef,
      injector,
    );
    const containerRef: ComponentRef<SfBottomSheetContainer> = overlayRef.attach(
      containerPortal,
    );
    return containerRef.instance;
  }

  /**
   * Creates a new overlay and places it in the correct location.
   * @param config The user-specified bottom sheet config.
   */
  private _createOverlay(config: SfBottomSheetConfig): OverlayRef {
    const overlayConfig = new OverlayConfig({
      direction: config.direction,
      hasBackdrop: config.hasBackdrop,
      disposeOnNavigation: config.closeOnNavigation,
      maxWidth: '100%',
      scrollStrategy:
        config.scrollStrategy || this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay
        .position()
        .global()
        .centerHorizontally()
        .bottom('0'),
    });

    if (config.backdropClass) {
      overlayConfig.backdropClass = config.backdropClass;
    }

    return this._overlay.create(overlayConfig);
  }

  /**
   * Creates an injector to be used inside of a bottom sheet component.
   * @param config Config that was used to create the bottom sheet.
   * @param bottomSheetRef Reference to the bottom sheet.
   */
  private _createInjector<T>(
    config: SfBottomSheetConfig,
    bottomSheetRef: SfBottomSheetRef<T>,
  ): Injector {
    const userInjector =
      config && config.viewContainerRef && config.viewContainerRef.injector;
    const providers: StaticProvider[] = [
      { provide: SfBottomSheetRef, useValue: bottomSheetRef },
      { provide: SF_BOTTOM_SHEET_DATA, useValue: config.data },
    ];

    if (
      config.direction &&
      (!userInjector ||
        !userInjector.get<Directionality | null>(Directionality, null))
    ) {
      providers.push({
        provide: Directionality,
        useValue: { value: config.direction, change: observableOf() },
      });
    }

    return Injector.create({
      parent: userInjector || this._injector,
      providers,
    });
  }
}

/**
 * Applies default options to the bottom sheet config.
 * @param defaults Object containing the default values to which to fall back.
 * @param config The configuration to which the defaults will be applied.
 * @returns The new configuration object with defaults applied.
 */
function _applyConfigDefaults(
  defaults: SfBottomSheetConfig,
  config?: SfBottomSheetConfig,
): SfBottomSheetConfig {
  return { ...defaults, ...config };
}
