import { Component, OnInit } from '@angular/core';
import { LRTimeline } from 'src/app/components/timeline/timelinemodels';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  timeline: LRTimeline[] =[
    {date:'12/20/21',title:'probando plantilla',content:'lorem lorem lorem',},
    {date:'12/20/21',title:'probando plantilla',content:'lorem lorem lorem',},
    {date:'12/20/21',title:'probando plantilla',content:'lorem lorem lorem',},
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
