import { Route } from '@angular/router';
import { HomeComponent  } from './admin/home/home.component';
import { InventarioComponent } from './admin/inventario/inventario.component'; 
import { LandingComponent } from './landing/landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { InicioComponent  } from './landing/inicio/inicio.component';
import { InformacionComponent } from './landing/informacion/informacion.component';
import { ProductosComponent } from './landing/productos/productos.component';
export const routerConfig:Route[] = [

    {
        path:'landing',
        component: LandingComponent,
        children: [
            {
                path:'inicio',
                component: InicioComponent
            },
            {
                path:'informacion',
                component: InformacionComponent   
            },
            {
                path: 'productos',
                component: ProductosComponent
            },
            {
                path:'',
                redirectTo:'inicio',
                pathMatch:'full'
            }
        ]
    },
    {
        path: 'ingreso',
        component: LoginComponent 
    },
    {
        path: 'admin',
        component: AdminComponent,
        children:[
            {
                path:'home',
                component: HomeComponent
            },
            {
                path:'inventario',
                component: InventarioComponent
            }
        ]
    },
    {
        path:'',
        redirectTo: 'landing',
        pathMatch: 'full'
    },{
        path:'**',
        redirectTo:'landing'
    }
]