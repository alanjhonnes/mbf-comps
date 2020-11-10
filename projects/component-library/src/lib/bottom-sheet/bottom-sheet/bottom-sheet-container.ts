import {
  Component,
  ComponentRef,
  EmbeddedViewRef,
  ViewChild,
  OnDestroy,
  ElementRef,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef,
  EventEmitter,
  Inject,
  Optional,
} from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import {
  BasePortalOutlet,
  ComponentPortal,
  TemplatePortal,
  CdkPortalOutlet,
  DomPortal,
} from '@angular/cdk/portal';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SfBottomSheetConfig } from './bottom-sheet-config';
import { sfBottomSheetAnimations } from './bottom-sheet-animations';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';

@Component({
  selector: 'mat-bottom-sheet-container',
  templateUrl: 'bottom-sheet-container.html',
  styleUrls: ['bottom-sheet-container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [sfBottomSheetAnimations.bottomSheetState],
  host: {
    class: 'mat-bottom-sheet-container',
    tabindex: '-1',
    role: 'dialog',
    'aria-modal': 'true',
    '[attr.aria-label]': 'bottomSheetConfig?.ariaLabel',
    '[@state]': '_animationState',
    '(@state.start)': '_onAnimationStart($event)',
    '(@state.done)': '_onAnimationDone($event)',
  },
})
export class SfBottomSheetContainer extends BasePortalOutlet
  implements OnDestroy {
  private _breakpointSubscription: Subscription;

  @ViewChild(CdkPortalOutlet, { static: true }) _portalOutlet: CdkPortalOutlet;

  _animationState: 'void' | 'visible' | 'hidden' = 'void';

  _animationStateChanged = new EventEmitter<AnimationEvent>();

  private _focusTrap: FocusTrap;

  private _elementFocusedBeforeOpened: HTMLElement | null = null;

  private _document: Document;

  private _destroyed: boolean;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _changeDetectorRef: ChangeDetectorRef,
    private _focusTrapFactory: FocusTrapFactory,
    breakpointObserver: BreakpointObserver,
    @Optional() @Inject(DOCUMENT) document: any,
    public bottomSheetConfig: SfBottomSheetConfig,
  ) {
    super();

    this._document = document;
    this._breakpointSubscription = breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(() => {
        this._toggleClass(
          'mat-bottom-sheet-container-medium',
          breakpointObserver.isMatched(Breakpoints.Medium),
        );
        this._toggleClass(
          'mat-bottom-sheet-container-large',
          breakpointObserver.isMatched(Breakpoints.Large),
        );
        this._toggleClass(
          'mat-bottom-sheet-container-xlarge',
          breakpointObserver.isMatched(Breakpoints.XLarge),
        );
      });
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    this._setPanelClass();
    this._savePreviouslyFocusedElement();
    return this._portalOutlet.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    this._setPanelClass();
    this._savePreviouslyFocusedElement();
    return this._portalOutlet.attachTemplatePortal(portal);
  }

  attachDomPortal = (portal: DomPortal) => {
    this._setPanelClass();
    this._savePreviouslyFocusedElement();
    return this._portalOutlet.attachDomPortal(portal);
  };

  enter(): void {
    if (!this._destroyed) {
      this._animationState = 'visible';
      this._changeDetectorRef.detectChanges();
    }
  }

  exit(): void {
    if (!this._destroyed) {
      this._animationState = 'hidden';
      this._changeDetectorRef.markForCheck();
    }
  }

  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
    this._destroyed = true;
  }

  _onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'hidden') {
      this._restoreFocus();
    } else if (event.toState === 'visible') {
      this._trapFocus();
    }

    this._animationStateChanged.emit(event);
  }

  _onAnimationStart(event: AnimationEvent) {
    this._animationStateChanged.emit(event);
  }

  private _toggleClass(cssClass: string, add: boolean) {
    const classList = this._elementRef.nativeElement.classList;
    add ? classList.add(cssClass) : classList.remove(cssClass);
  }

  private _setPanelClass() {
    const element: HTMLElement = this._elementRef.nativeElement;
    const panelClass = this.bottomSheetConfig.panelClass;

    if (Array.isArray(panelClass)) {
      panelClass.forEach((cssClass) => element.classList.add(cssClass));
    } else if (panelClass) {
      element.classList.add(panelClass);
    }
  }

  private _trapFocus() {
    const element = this._elementRef.nativeElement;

    if (!this._focusTrap) {
      this._focusTrap = this._focusTrapFactory.create(element);
    }

    if (this.bottomSheetConfig.autoFocus) {
      this._focusTrap.focusInitialElementWhenReady();
    } else {
      const activeElement = this._document.activeElement;

      if (activeElement !== element && !element.contains(activeElement)) {
        element.focus();
      }
    }
  }

  private _restoreFocus() {
    const toFocus = this._elementFocusedBeforeOpened;

    if (
      this.bottomSheetConfig.restoreFocus &&
      toFocus &&
      typeof toFocus.focus === 'function'
    ) {
      const activeElement = this._document.activeElement;
      const element = this._elementRef.nativeElement;

      if (
        !activeElement ||
        activeElement === this._document.body ||
        activeElement === element ||
        element.contains(activeElement)
      ) {
        toFocus.focus();
      }
    }

    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }

  private _savePreviouslyFocusedElement() {
    this._elementFocusedBeforeOpened = this._document
      .activeElement as HTMLElement;

    if (this._elementRef.nativeElement.focus) {
      Promise.resolve().then(() => this._elementRef.nativeElement.focus());
    }
  }
}
