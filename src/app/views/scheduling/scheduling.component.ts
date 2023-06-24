import { Component, OnInit } from '@angular/core'
import { SchedulingService } from './scheduling.service'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { Service } from 'src/app/interfaces/service'

@Component({
	selector: 'app-scheduling',
	templateUrl: './scheduling.component.html',
	styleUrls: ['./scheduling.component.css'],
})
export class SchedulingComponent implements OnInit {
	constructor(private schedulingService: SchedulingService, private router: Router) {}

	ngOnInit() {}

	servicesControl = new FormControl('')

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

	createService(): void {
		this.schedulingService.create(this.scheduling).subscribe(() => {
			this.schedulingService.showMessage('Serviços Agendados com sucesso!')
			this.router.navigate(['/services-list'])
		})
	}

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
		additional_info: '',
		created_at: new Date(),
	}

	cancel(): void {
		this.router.navigate(['/'])
	}
}
