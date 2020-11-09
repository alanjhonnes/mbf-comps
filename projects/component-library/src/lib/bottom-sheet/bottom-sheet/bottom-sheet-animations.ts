import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';
import { AnimationCurves, AnimationDurations } from '@angular/material/core';

export const matBottomSheetAnimations: {
  readonly bottomSheetState: AnimationTriggerMetadata;
} = {
  bottomSheetState: trigger('state', [
    state('void, hidden', style({ transform: 'translateY(100%)' })),
    state('visible', style({ transform: 'translateY(0%)' })),
    transition(
      'visible => void, visible => hidden',
      animate(
        `${AnimationDurations.COMPLEX} ${AnimationCurves.ACCELERATION_CURVE}`,
      ),
    ),
    transition(
      'void => visible',
      animate(
        `${AnimationDurations.EXITING} ${AnimationCurves.DECELERATION_CURVE}`,
      ),
    ),
  ]),
};
