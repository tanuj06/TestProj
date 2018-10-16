import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { EmployeeDashboardComponent } from './employees/employee-dashboard/employee-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './MenuItems/about-us/about-us.component';
import { ContactDetailsComponent } from './MenuItems/contact-details/contact-details.component';
import { CareersComponent } from './MenuItems/careers/careers.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'Home', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'employees', component: EmployeeDashboardComponent },
  { path: 'detail/:id',component:EmployeeDetailComponent},
  { path:'dashboard', component: DashboardComponent },
  { path: 'About Us', component: AboutUsComponent },
  { path: 'Contact Us', component: ContactDetailsComponent },
  { path: 'Careers', component: CareersComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
  constructor(){}

 }
