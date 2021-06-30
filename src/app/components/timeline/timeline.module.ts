import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LrtimelineComponent } from './lrtimeline/lrtimeline.component';

const exports = [LrtimelineComponent];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule],
  exports: exports,
})
export class TimelineModule {}
