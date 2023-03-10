import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, data: { title: 'Gre8' }
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
