import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
  OnInit
} from '@angular/core';

import { TimelineElement } from './timeline-element';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeLineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
