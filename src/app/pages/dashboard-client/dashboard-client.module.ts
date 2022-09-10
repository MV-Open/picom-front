import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardClientComponent } from './dashboard-client.component';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';



@NgModule({
  declarations: [
    DashboardClientComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    DashboardClientComponent
  ]
})
export class DashboardClientModule { }
