import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http'
import { Service } from 'src/app/interfaces/service'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class SchedulingService {
	baseUrl = 'https://648a43cb5fa58521cab10cb5.mockapi.io/services'
	constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

	showMessage(msg: string): void {
		this.snackBar.open(msg, '', {
			duration: 3000,
			horizontalPosition: 'right',
			verticalPosition: 'top',
		})
	}

	create(service: Service): Observable<Service> {
		return this.http.post<Service>(this.baseUrl, service)
	}
}
