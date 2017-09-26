import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { CatService } from './services/cat.service';
import { ClientService } from './services/client.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClientsComponent } from './clients/clients.component';
import { InputTextModule, ButtonModule, DataTableModule, InputTextareaModule } from 'primeng/primeng';
import { DialogModule, SelectButtonModule, InputMaskModule, CalendarModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';
import { CarersComponent } from './carers/carers.component';
import {CarerService} from "./services/carer.service";


@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    ClientsComponent,
    CarersComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    HttpModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    InputTextareaModule,
    DialogModule,
    InputMaskModule,
    SelectButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    SharedModule,
    FileUploadModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    ClientService,
    CarerService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
