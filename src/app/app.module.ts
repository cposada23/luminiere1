import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/** routes  */
import { RouterModule } from '@angular/router';
import { routerConfig } from './router.config';

 

import { AppComponent } from './app.component';
import { ListaTareasComponent } from './admin/lista-tareas/lista-tareas.component';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { HomeComponent } from './admin/home/home.component';
import { PedidosComponent } from './admin/pedidos/pedidos.component';
import { InventarioComponent } from './admin/inventario/inventario.component';

import '../assets/custom.min.js';
import { ItemsVendidosDiaComponent } from './admin/items-vendidos-dia/items-vendidos-dia.component';
import { LandingComponent } from './landing/landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { InicioComponent } from './landing/inicio/inicio.component';
import { InformacionComponent } from './landing/informacion/informacion.component';
import { ProductosComponent } from './landing/productos/productos.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    NavigationComponent,
    HomeComponent,
    PedidosComponent,
    InventarioComponent,
    ItemsVendidosDiaComponent,
    LandingComponent,
    LoginComponent,
    AdminComponent,
    InicioComponent,
    InformacionComponent,
    LandingComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
