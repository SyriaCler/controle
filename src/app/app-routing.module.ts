import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component'
import { LoginComponent } from './login/login.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  { path: 'home', component: ContentComponent},
  { path: '**', redirectTo: "home"},
  { path: 'login', component: LoginComponent},
  { path: 'projetos', component: ProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const OUTRO_ROUTING = RouterModule.forRoot(routes);
