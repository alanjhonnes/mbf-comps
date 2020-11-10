import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { OverlayRef } from '@angular/cdk/overlay';
import { merge, Observable, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { SfBottomSheetContainer } from './bottom-sheet-container';

export class SfBottomSheetRef<T = any, R = any> {
  instance: T;
  containerInstance: SfBottomSheetContainer;
  disableClose: boolean | undefined;

  private readonly _afterDismissed = new Subject<R | undefined>();
  private readonly _afterOpened = new Subject<void>();
  private _result: R | undefined;
  private _closeFallbackTimeout: number | any;

  constructor(
    containerInstance: SfBottomSheetContainer,
    private _overlayRef: OverlayRef,
  ) {
    this.containerInstance = containerInstance;
    this.disableClose = containerInstance.bottomSheetConfig.disableClose;

    containerInstance._animationStateChanged
      .pipe(
        filter(
          (event) => event.phaseName === 'done' && event.toState === 'visible',
        ),
        take(1),
      )
      .subscribe(() => {
        this._afterOpened.next();
        this._afterOpened.complete();
      });

    containerInstance._animationStateChanged
      .pipe(
        filter(
          (event) => event.phaseName === 'done' && event.toState === 'hidden',
        ),
        take(1),
      )
      .subscribe(() => {
        clearTimeout(this._closeFallbackTimeout);
        _overlayRef.dispose();
      });

    _overlayRef
      .detachments()
      .pipe(take(1))
      .subscribe(() => {
        this._afterDismissed.next(this._result);
        this._afterDismissed.complete();
      });

    merge(
      _overlayRef.backdropClick(),
      _overlayRef
        .keydownEvents()
        .pipe(filter((event) => event.keyCode === ESCAPE)),
    ).subscribe((event) => {
      if (
        !this.disableClose &&
        (event.type !== 'keydown' || !hasModifierKey(event as KeyboardEvent))
      ) {
        event.preventDefault();
        this.dismiss();
      }
    });
  }

  /**
   * Dismisses the bottom sheet.
   * @param result Data to be passed back to the bottom sheet opener.
   */
  dismiss(result?: R): void {
    if (!this._afterDismissed.closed) {
      this.containerInstance._animationStateChanged
        .pipe(
          filter((event) => event.phaseName === 'start'),
          take(1),
        )
        .subscribe((event) => {
          this._closeFallbackTimeout = setTimeout(() => {
            this._overlayRef.dispose();
          }, event.totalTime + 100);

          this._overlayRef.detachBackdrop();
        });

      this._result = result;
      this.containerInstance.exit();
    }
  }

  afterDismissed(): Observable<R | undefined> {
    return this._afterDismissed;
  }

  afterOpened(): Observable<void> {
    return this._afterOpened;
  }

  backdropClick(): Observable<MouseEvent> {
    return this._overlayRef.backdropClick();
  }

  keydownEvents(): Observable<KeyboardEvent> {
    return this._overlayRef.keydownEvents();
  }
}
