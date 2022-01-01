import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {DbzModule} from './dbz/dbz.module'
import { FormsModule } from '@angular/forms'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormularioTokenComponent } from './formulario-token/formulario-token.component';
import { HomeComponent } from './home/home.component';
// import { CountdownTimerModule } from 'angular-countdown-timer';

@NgModule({
  declarations: [
    AppComponent,
    FormularioTokenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DbzModule,
    HttpClientModule,
    FormsModule,
    NgbProgressbarModule,
    AppRoutingModule,

   // CountdownTimerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
