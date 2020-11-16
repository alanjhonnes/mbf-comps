import * as Core from '../../../core/index';
import { AnimationTriggerMetadata } from '@angular/animations';

export const sfBottomSheetAnimations: {
  readonly bottomSheetState: AnimationTriggerMetadata;
} = {
  bottomSheetState: Core.trigger('state', [
    Core.state('void, hidden', Core.style({ transform: 'translateY(100%)' })),
    Core.state('visible', Core.style({ transform: 'translateY(0%)' })),
    Core.transition(
      'visible => void, visible => hidden',
      Core.animate(
        `${Core.AnimationDurations.COMPLEX} ${Core.AnimationCurves.ACCELERATION_CURVE}`,
      ),
    ),
    Core.transition(
      'void => visible',
      Core.animate(
        `${Core.AnimationDurations.EXITING} ${Core.AnimationCurves.DECELERATION_CURVE}`,
      ),
    ),
  ]),
};
