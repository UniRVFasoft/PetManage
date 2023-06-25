import { Component, OnInit } from '@angular/core'
import { ServiceAPI } from './service.service'

@Component({
	templateUrl: './service.component.html',
	styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
	constructor(private serviceAPI: ServiceAPI) {}

	ngOnInit(): void {
		this.serviceAPI.getService().subscribe(
			(response: any) => {
				const objectID = response.id
				console.log('id do service: ' + objectID)
			},
			(error) => {
				console.error(error)
			}
		)
	}
}
