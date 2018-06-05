import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.routes';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { MenuComponent } from './menu/menu.component';
import { FacturaComponent } from './factura/factura.component';
import { RegistrarMenuComponent } from './registrar-menu/registrar-menu.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        RestauranteComponent,
        Graficas1Component,
        MenuComponent,
        FacturaComponent,
        RegistrarMenuComponent,
        RegistrarProductoComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        RestauranteComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PAGES_ROUTES,
        BrowserModule,
    ]
})

export class PagesModule { }

