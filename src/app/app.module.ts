import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductsComponent } from './products/products.component';
import { MailService } from './Services/MailService/mail.service';
import { EmployeeDataService } from './Services/EmployeeData/employee-data.service';
import { MenuService } from './Services/MenuService/menu.service';
import { EmployeeDashboardComponent } from './employees/employee-dashboard/employee-dashboard.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './MenuItems/about-us/about-us.component';
import { ContactDetailsComponent } from './MenuItems/contact-details/contact-details.component';
import { CareersComponent } from './MenuItems/careers/careers.component';
import { ValuePipe } from '../pipes/ValuePipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    ProductsComponent,
    EmployeeDashboardComponent,
    EmployeeDetailComponent,
    DashboardComponent,
    AboutUsComponent,
    ContactDetailsComponent,
    CareersComponent, 
    ValuePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{provide:'MessageService', useClass: MailService}, {provide:'EmployeeData', useClass: EmployeeDataService}, {provide:'MenuStrip', useClass:MenuService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
