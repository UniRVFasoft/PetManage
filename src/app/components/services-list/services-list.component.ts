import { Component } from '@angular/core';
import * as dayjs from 'dayjs';

export interface Services {
  title: string;
  customer: string;
  animal: string;
  animalName: string;
  employee?: string;
  created: string;
}

/**
  @title Lista de todos os serviços
*/

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
})
export class ServicesListComponent {
  pendingServices: Services[] = [
    {
      title: 'Banho e Tosa',
      customer: 'Pedro Henrique Mendes',
      animal: 'Cachorro',
      animalName: 'Cacau',
      created: dayjs('6/1/23').format('DD/MM/YY'),
    },
    {
      title: 'Banho',
      customer: 'Rhogger Freitas',
      animal: 'Cachorro',
      animalName: 'Princípe',
      created: dayjs('6/1/23').format('DD/MM/YY'),
    },
    {
      title: 'Creche',
      customer: 'Natan Doenças',
      animal: 'Cachorro',
      animalName: 'Fred',
      created: dayjs('5/2/18').format('DD/MM/YY'),
    },
  ];

  completedServices: Services[] = [
    {
      title: 'Limpeza Dentária',
      customer: 'Billy Fasoft Silva',
      animal: 'Tubarão',
      animalName: 'Te Amo',
      created: dayjs('6/1/23').format('DD/MM/YY'),
    },
  ];
}
