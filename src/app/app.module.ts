import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';


// Modulos
import { PagesComponent } from './pages/pages.component';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { RegisterComponent } from './login/register/register.component';
import { SharedModule } from './shared/shared.module';
import { VerMenuComponent } from './ver-menu/ver-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VerMenuComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTES,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
