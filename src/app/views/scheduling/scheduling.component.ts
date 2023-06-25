import { Component, OnInit } from '@angular/core'
import { SchedulingService } from './scheduling.service'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { Service } from 'src/app/interfaces/service'
import { ServiceAPI } from 'src/app/views/services-list/services-list.service'
@Component({
	selector: 'app-scheduling',
	templateUrl: './scheduling.component.html',
	styleUrls: ['./scheduling.component.css'],
})
export class SchedulingComponent implements OnInit {
	constructor(
		private schedulingService: SchedulingService,
		private router: Router,
		private serviceAPI: ServiceAPI
	) {}

	ngOnInit() {}

	public servicesControl = new FormControl('')

	servicesList: string[] = [
		'Banho',
		'Tosa',
		'Creche',
		'Cuidados com Pele e Pelo',
		'Corte de unhas',
		'Receita Alimentícia',
		'Receita Higienica e Cuidados',
		'Adestramento',
		'Consulta Veterinária',
	]

	genderControl = new FormControl('')
	genders: string[] = ['Macho', 'Fêmea']

	sizeControl = new FormControl('')
	sizes: string[] = ['Muito Pequeno', 'Pequeno', 'Médio', 'Grande', 'Muito Grande']

	colorControl = new FormControl('')
	colors: string[] = ['Amarelo', 'Branco', 'Caramelo', 'Preto', 'Cinza', 'Ruivo', 'Marrom']

	dogImage = this.serviceAPI.dogImageUrl

	scheduling: Service = {
		services: [],
		service_cost: null,
		tutor_name: '',
		tutor_address: '',
		pet_name: '',
		pet_gender: '',
		pet_age: null,
		pet_size: '',
		pet_color: [],
		pet_image: this.dogImage,
		additional_info: '',
		ind_finalizado: false,
		created_at: new Date(),
	}

	createService(): void {
		this.schedulingService.create(this.scheduling).subscribe(() => {
			this.schedulingService.showMessage('Serviços Agendados com sucesso!')
			this.router.navigate(['/services-list'])
		})
	}

	cancel(): void {
		this.router.navigate(['/'])
	}

	reloadPage() {
		this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
			this.router.navigate([this.router.url])
		})
	}
}
