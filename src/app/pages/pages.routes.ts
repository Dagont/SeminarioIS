import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { MenuComponent } from './menu/menu.component';
import { FacturaComponent } from './factura/factura.component';
import { RegistrarMenuComponent } from './registrar-menu/registrar-menu.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { VerMenuComponent } from '../ver-menu/ver-menu.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent ,
        children: [
            {path: 'dashboard', component: DashboardComponent },
            {path: 'progress', component: ProgressComponent },
            {path: 'graficas1', component: Graficas1Component },
            {path: 'restaurante', component: RestauranteComponent},
            {path: 'menu', component: MenuComponent},
            {path: 'registrarmenu', component: RegistrarMenuComponent},
            {path: 'registrarproducto', component: RegistrarProductoComponent},
            {path: 'factura', component: FacturaComponent},
            {path: 'vermenu', component: VerMenuComponent},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
