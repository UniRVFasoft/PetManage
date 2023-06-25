import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ServicesListComponent } from './views/services-list/services-list.component'
import { SchedulingComponent } from './views/scheduling/scheduling.component'
import { ServiceComponent } from './views/service/service.component'
import { HomeComponent } from './views/home/home.component'

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'scheduling', component: SchedulingComponent },
	{ path: 'services-list', component: ServicesListComponent },
	{ path: 'services-list/:id', component: ServiceComponent },
]

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
