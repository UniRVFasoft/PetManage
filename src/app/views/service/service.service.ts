import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Service } from 'src/app/interfaces/service'
import { Response } from 'src/app/interfaces/response'

@Injectable({
	providedIn: 'root',
})
export class ServiceAPI {
	url = 'https://648a43cb5fa58521cab10cb5.mockapi.io/services/'

	constructor(private http: HttpClient) {}

	getService(id: string) {
		const url = `${this.url}/${id}`

		console.log('URL: ' + url)

		return this.http.get<Service>(url)
	}
}
