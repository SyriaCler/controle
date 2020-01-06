import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { HomeLogadaComponent} from './home-logada/home-logada.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  { path: 'home', component: ContentComponent},
  { path: 'login', component: LoginComponent},
<<<<<<< HEAD
  { path: 'home-logada', component: HomeLogadaComponent},
  { path: 'projetos', component: ProjetosComponent},
  { path: '**', redirectTo: "home"},
=======
  { path: 'projetos', component: ProjetosComponent},
  { path: '**', redirectTo: 'home'},
>>>>>>> c91ea3820919901b39243ac80c65bf4671fa5e59
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const OUTRO_ROUTING = RouterModule.forRoot(routes);
