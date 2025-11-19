import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServiceBoxComponent } from './service-box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ServiceBoxComponent],
  exports: [ServiceBoxComponent],
})
export class ServiceBoxModule {}
