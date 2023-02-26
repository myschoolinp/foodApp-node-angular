import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './adminlogin/dashboard/dashboard.component';
import { AdminloginGuard } from './adminlogin/service/adminlogin.guard';
import { BooktableComponent } from './booktable/booktable.component';
import { HomeComponent } from './home/home.component';
import { MaterialExampleModule } from './material.module';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'adminlogin',component:AdminloginComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'booktable',component:BooktableComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AdminloginGuard]},
  { path: '**', pathMatch: 'full',  component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MaterialExampleModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
