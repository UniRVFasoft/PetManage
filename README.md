# PetManage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version
16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will
automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use
`ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you
need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the
[Angular CLI Overview and Command Reference](https://angular.io/cli) page.

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11290709&assignment_repo_type=AssignmentRepo)

<<<<<<< HEAD
## TODO-List

- Estilizar a página home
- Estilizar os botoes de envio do formulário
- Estilizar a página da lista de serviços
- Adicionar um campo no banco e interface em que o serviço está pendente/finalizado
- Trabalhar no reload da pagina pra nao gerar a mesma imagem
- Se coloco todos os campos, a imagem nao é gerada
- Tratar a data no card do serviço
=======
Requisitos e datalhamento do projeto

Descrição
"Nossa aplicação web para pet shop é uma solução completa para o gerenciamento eficiente de serviços de banho, tosa, consultas em geral e afins. Com nossa plataforma, proprietários de pet shops poderão simplificar suas operações diárias, oferecer serviços de alta qualidade e fornecer uma experiência aprimorada para seus clientes de quatro patas.”
Telas
Agendamento: Nessa tela, os funcionários poderão visualizar uma lista de agendamentos de banho e tosa para o dia, incluindo informações relevantes sobre cada serviço, como o nome do animal, a raça e os detalhes do serviço solicitado. Eles poderão adicionar novos agendamentos, atualizar ou cancelar os existentes, conforme necessário.
Além disso, a tela de gerenciamento de banho e tosa pode fornecer funcionalidades adicionais, como registro de histórico de serviços realizados, informações sobre preferências ou necessidades especiais dos animais, e controle de horários disponíveis para agendamento.

Tela de serviços: Nessa tela, será exibida uma lista de todos os serviços que estão em aberto, aguardando realização. Para cada serviço, serão exibidas informações relevantes, como o nome do cliente, o tipo de serviço solicitado e a data e horário agendados.
Os funcionários terão a opção de atualizar o status de cada serviço, indicando se está em andamento, concluído ou cancelado. Ao marcar um serviço como finalizado, ele será removido da lista de serviços em aberto e poderá ser arquivado para referência futura, se necessário.
A tela de serviços também pode incluir uma seção de histórico, onde os funcionários podem acessar serviços concluídos anteriormente. Isso permitirá consultar registros anteriores, revisar informações relevantes e fornecer um histórico completo dos serviços prestados.

Requisitos
Agendamento

Cadastro de Clientes: Os funcionários devem ter a capacidade de cadastrar novos clientes, incluindo informações como nome, endereço e número de telefone.
Cadastro de Animais: Os funcionários devem poder cadastrar os animais de estimação dos clientes, especificando seu nome, espécie, raça, idade e qualquer informação relevante sobre sua saúde ou comportamento.
Agendamento de Serviços: Os funcionários devem poder agendar os serviços oferecidos pelo pet shop, como banho, tosa, hidratação e corte de unhas. Eles devem selecionar o cliente, o animal de estimação, o tipo de serviço e a data e hora desejadas.
Preços dos Serviços: A tela de serviços deve exibir os preços correspondentes a cada serviço, permitindo que os clientes tenham uma ideia clara dos custos envolvidos.

Tela de serviços

Listagem de Serviços Agendados: A tela deve exibir uma lista de todos os serviços agendados, incluindo informações como o nome do cliente, tipo de serviço, data e horário agendados.
Detalhes do Serviço: Ao selecionar um serviço agendado, os funcionários devem ter acesso aos detalhes completos do serviço, como o nome do cliente, informações do animal de estimação, tipo de serviço solicitado e quaisquer instruções adicionais.
Status do Serviço: Os funcionários devem poder atualizar o status dos serviços agendados, indicando se o serviço está "em andamento", "concluído" ou "cancelado". Isso ajudará a manter o controle do progresso dos serviços.

Ideias de como POO na nossa aplicação

Usar herança para criar subclasses de serviços, como "Banho", "Tosa" e "Consulta". Essas subclasses podem estender uma classe base "Serviço" e adicionar propriedades e métodos específicos.
Podemos fazer métodos, de agendar, criar e obter agendamento para manipular os dados na tela de agendamento.
Na tela de financeiro podemos usar encapsulamento para proteger dados importantes.
>>>>>>> 9a719be2a5545240905174ff0bb10938d0b3ccfc
