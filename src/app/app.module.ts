import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// rotas
import { OUTRO_ROUTING } from "./app-routing.module"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    ContentComponent,
    ProjetosComponent,
    HomeLogadaComponent,
    LancamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OUTRO_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
