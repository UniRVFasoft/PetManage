import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
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

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ServicesListComponent,
		SchedulingComponent,
		ServiceComponent,
		InputFormComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
	],
	providers: [ServicesListComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
