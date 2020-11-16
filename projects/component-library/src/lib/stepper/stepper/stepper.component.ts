import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sf-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent implements OnInit {

  @Input() steps: string[];

  @Input() status: number;

  @Output() clickStep = new EventEmitter<number>();

  doneLine: number;

  isMobile = true;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnChanges() {
    this.makeLine();
  }

  ngOnInit() {
    this.breakpointObserver.observe(['(min-width: 768px)']).subscribe((state: BreakpointState) => {
      this.isMobile = state.matches ? false : true;
    });
    this.makeLine();
  }

  makeLine() {
    const availableLines = (this.steps.length - 1);
    const stepSize = 100 / availableLines;
    this.doneLine = (this.status - 1) * stepSize;
  }

}
