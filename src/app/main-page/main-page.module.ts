import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { ServiceBoxModule } from './components/service-box/service-box.module';
import { UsernamePipe } from '@app/@shared/pipes/username.pipe';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, MainPageRoutingModule, ServiceBoxModule],
})
export class MainPageModule {}
