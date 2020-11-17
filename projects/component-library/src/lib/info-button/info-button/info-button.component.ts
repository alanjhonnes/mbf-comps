import { ConnectedPosition } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sf-info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoButtonComponent implements OnInit {
  public positions: ConnectedPosition[];
  public show: boolean;

  constructor() { }

  ngOnInit(): void {
    this.loadPositions();
  }

  loadPositions() {
    this.positions = [
      // middle-right
      {
        originX: "start",
        originY: "center",
        overlayX: "end",
        overlayY: "center",
        offsetX: -10,
      },
      // middle-left
      {
        originX: "end",
        originY: "center",
        overlayX: "start",
        overlayY: "center",
        offsetX: 10,
      },
      // top-left
      {
        originX: "end",
        originY: "center",
        overlayX: "start",
        overlayY: "top",
      },
      // bottom-left
      {
        originX: "end",
        originY: "center",
        overlayX: "start",
        overlayY: "bottom",
      },
      // bottom-right
      {
        originX: "start",
        originY: "center",
        overlayX: "end",
        overlayY: "bottom",
      },
      // top-right
      {
        originX: "start",
        originY: "center",
        overlayX: "end",
        overlayY: "top",
      }];
  }
}
