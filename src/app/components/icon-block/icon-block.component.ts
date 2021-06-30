import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-block',
  templateUrl: './icon-block.component.html',
  styleUrls: ['./icon-block.component.scss']
})
export class IconBlockComponent implements OnInit {

  @Input() title:string='';
  @Input() name:string='';
  @Input() tel:string='';
  @Input() icon:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
