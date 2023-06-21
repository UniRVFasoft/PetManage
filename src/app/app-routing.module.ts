import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'services-list', component: ServicesListComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'scheduling', component: SchedulingComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
