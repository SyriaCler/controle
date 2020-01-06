import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { HomeLogadaComponent} from './home-logada/home-logada.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  { path: 'home', component: ContentComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home-logada', component: HomeLogadaComponent},
  { path: 'projetos', component: ProjetosComponent},
  { path: '**', redirectTo: "home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const OUTRO_ROUTING = RouterModule.forRoot(routes);
