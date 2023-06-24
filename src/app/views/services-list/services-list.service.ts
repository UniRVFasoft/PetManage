import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//Interfaces
import { Service } from 'src/app/interfaces/service'

@Injectable({
	providedIn: 'root',
})
export class ServiceAPI {
	constructor(private http: HttpClient) {}

	private url = 'https://648a43cb5fa58521cab10cb5.mockapi.io/services'

	public getServices() {
		return this.http.get<Service[]>(this.url)
	}
}
