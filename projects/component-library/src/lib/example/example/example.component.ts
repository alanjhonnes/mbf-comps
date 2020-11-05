import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sf-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent implements OnInit {

  @Input()
  texto: string;

  @Output()
  clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.clicked.emit(Math.random());
    }, 1000);
  }

}
