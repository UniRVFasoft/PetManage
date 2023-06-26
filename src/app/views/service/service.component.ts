import { Component, OnInit } from '@angular/core'
import { ServiceAPI } from './service.service'
import { ActivatedRoute } from '@angular/router'
import { Service } from 'src/app/interfaces/service'

@Component({
	templateUrl: './service.component.html',
	styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
	service?: Service

	constructor(private serviceAPI: ServiceAPI, private route: ActivatedRoute) {}

	ngOnInit(): void {
		const id = String(this.route.snapshot.paramMap.get('id'))
		console.log('ID: ' + id)

		this.serviceAPI.getService(id).subscribe((response) => (this.service = response))
	}
}
