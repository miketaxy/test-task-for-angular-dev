import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { Shell } from '@app/shell/shell.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  Shell.childRoutes([{ path: 'main', component: MainPageComponent, data: { title: marker('Main Page') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
