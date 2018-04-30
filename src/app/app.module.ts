import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductsComponent } from './products/products.component';
import { MailService } from './Services/MailService/mail.service';
import { VerifyDataService } from './Services/VerifyData/verify-data.service';
import { MenuService } from './Services/MenuService/menu.service';
import { EmployeeDashboardComponent } from './employees/employee/employee-dashboard/employee-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    ProductsComponent,
    EmployeeDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MailService, {provide:'Verify', useClass: VerifyDataService}, {provide:'MenuStrip', useClass:MenuService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
