import { Component, OnInit } from '@angular/core'
import { SchedulingService } from './scheduling.service'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'

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
		this.schedulingService.showMessage('Serviços Agendados com sucesso!')
	}

	cancel(): void {
		this.router.navigate(['/'])
	}
}
