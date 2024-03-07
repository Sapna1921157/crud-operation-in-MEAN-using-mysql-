import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core'
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';

const routes: Routes = [

  { path: '', redirectTo: "dashboard", 
  pathMatch: "full"
},

{
  path:'dashboard', component: DashboardComponent
},

{
  path:'header', component: HeaderComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
