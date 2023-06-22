import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ServicesListComponent } from './components/services-list/services-list.component'
import { SchedulingComponent } from './components/scheduling/scheduling.component'

const routes: Routes = [
	{ path: 'services-list', component: ServicesListComponent },
	{ path: 'scheduling', component: SchedulingComponent },
]

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
