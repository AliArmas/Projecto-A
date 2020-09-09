import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NvarComponent } from './components/nvar/nvar.component';
import { FooterAppComponent } from './components/footer-app/footer-app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NvarComponent,
    FooterAppComponent,
    ProductosComponent,
    LogInComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
