import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
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
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './mock-records/in-memory-data.service';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';


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
    ValuePipe, AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }
    ) 
  ],
  providers: [{provide:'MessageService', useClass: MailService}, {provide:'EmployeeData', useClass: EmployeeDataService}, {provide:'MenuStrip', useClass:MenuService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
