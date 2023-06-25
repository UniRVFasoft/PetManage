import { Component, OnInit } from '@angular/core'
import { ServiceAPI } from './services-list.service'
import { Service } from 'src/app/interfaces/service'
import { SchedulingComponent } from '../scheduling/scheduling.component'

/**
  @title Lista de todos os serviços
*/

@Component({
	selector: 'app-services-list',
	templateUrl: './services-list.component.html',
	styleUrls: ['./services-list.component.css'],
})
export class ServicesListComponent implements OnInit {
	public allServices: Service[] = []

	constructor(private serviceAPI: ServiceAPI) {}

	ngOnInit(): void {
		this.serviceAPI.getServices().subscribe((services) => {
			this.allServices = services
		})
	}
}
