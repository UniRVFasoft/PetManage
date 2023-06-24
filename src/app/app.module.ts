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

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		SchedulingComponent,
		ServicesListComponent,
		ServiceComponent,
		OnlyLettersDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatCardModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		ReactiveFormsModule,
		MatSnackBarModule,
	],
	providers: [ServicesListComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
