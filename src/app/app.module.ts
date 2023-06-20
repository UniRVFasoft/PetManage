import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServicesListComponent } from './components/services-list/services-list.component'
import { SchedulingComponent } from './components/scheduling/scheduling.component'

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ServicesListComponent,
		SchedulingComponent,
	],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule],
	providers: [ServicesListComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
