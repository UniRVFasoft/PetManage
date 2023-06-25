import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class ServiceAPI {
	constructor(private http: HttpClient) {}

	getService() {
		return this.http.get('https://648a43cb5fa58521cab10cb5.mockapi.io/services/')
	}
}
