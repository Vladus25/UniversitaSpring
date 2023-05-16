import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentiComponent } from './components/studenti/studenti.component';
import { RicercheComponent } from './components/ricerche/ricerche.component';

const routes: Routes = [
  {path:'Studenti', component: StudentiComponent },
  {path:'Ricerche', component: RicercheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
