import { Component, Input, OnInit } from '@angular/core';
import { LRTimeline } from '../timelinemodels';

@Component({
  selector: 'app-lrtimeline',
  templateUrl: './lrtimeline.component.html',
  styleUrls: ['./lrtimeline.component.scss'],
})
export class LrtimelineComponent implements OnInit {
  @Input() data: LRTimeline[] = [];
  constructor() {}

  ngOnInit(): void {}
}
