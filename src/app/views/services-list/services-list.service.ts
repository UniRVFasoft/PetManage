import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

//Interfaces
import { Service } from 'src/app/interfaces/service'

@Injectable({
	providedIn: 'root',
})
export class ServicesAPI {
	public dogImageUrl: string = ''

	constructor(private http: HttpClient) {
		this.getDogImage()
	}

	private urlAPI = 'https://648a43cb5fa58521cab10cb5.mockapi.io/services'

	public getServices() {
		return this.http.get<Service[]>(this.urlAPI)
	}

	public getDogImage() {
		this.http.get<any[]>('https://api.thedogapi.com/v1/images/search').subscribe(
			(response) => {
				this.dogImageUrl = response[0].url
			},
			(error) => {
				console.error('Erro ao encontrar a imagem', error)
			}
		)
	}
}
