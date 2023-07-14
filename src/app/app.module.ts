import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecoveryPassComponent } from './auth/recovery-pass/recovery-pass.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BirdCreateComponent } from './bird-register/bird-create/bird-create.component';
import { BirdReadComponent } from './bird-register/bird-read/bird-read.component';
import { BirdUpdateComponent } from './bird-register/bird-update/bird-update.component';
import { BirdListComponent } from './bird-register/bird-list/bird-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecoveryPassComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BirdCreateComponent,
    BirdReadComponent,
    BirdUpdateComponent,
    BirdListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
