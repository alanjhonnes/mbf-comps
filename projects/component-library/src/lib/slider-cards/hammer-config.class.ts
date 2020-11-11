import { HammerGestureConfig } from '@angular/platform-browser';
// import * as hammer from "hammerjs";

export class SlideToViewHammerConfig extends HammerGestureConfig {
    overrides = {
        swipe: {
            direction: Hammer.DIRECTION_ALL,
            threshold: 2,
            velocity: 1,
        },
    };
}