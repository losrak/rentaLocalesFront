import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalesComponent } from './components/locales/locales.component';
import { RentarComponent } from './components/rentar/rentar.component';


const routes: Routes = [
  { path: 'locales', component: LocalesComponent},
  { path: 'rentar/:id', component: RentarComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'locales' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
