import { NgModule } from '@angular/core'

//Componentes do Angular para Rotas e HTTP Client
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//Componentes da Aplicação
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
<<<<<<< HEAD

//Telas da aplicação
import { HomeComponent } from './views/home/home.component'
import { SchedulingComponent } from './views/scheduling/scheduling.component'
import { ServicesListComponent } from './views/services-list/services-list.component'
import { ServiceComponent } from './views/service/service.component'

//Componentes do Material
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar'

//Diretivas
import { OnlyLettersDirective } from './directive/onlyLetters.directive'
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServicesListComponent } from './views/services-list/services-list.component'
import { SchedulingComponent } from './views/scheduling/scheduling.component'
import { ServiceComponent } from './views/service/service.component'

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { InputFormComponent } from './components/input-form/input-form.component'
>>>>>>> e28643e567a49e21b4b3ba13ce1867db7e7477ff

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		SchedulingComponent,
<<<<<<< HEAD
		ServicesListComponent,
		ServiceComponent,
		OnlyLettersDirective,
=======
		ServiceComponent,
		InputFormComponent,
>>>>>>> e28643e567a49e21b4b3ba13ce1867db7e7477ff
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
<<<<<<< HEAD
		MatCardModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		ReactiveFormsModule,
		MatSnackBarModule,
=======
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
>>>>>>> e28643e567a49e21b4b3ba13ce1867db7e7477ff
	],
	providers: [ServicesListComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
