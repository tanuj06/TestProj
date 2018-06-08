import { Component, OnInit, Inject } from '@angular/core';
import { MockEmployees } from '../../mock-records/mock-records';
import { Employee } from '../employee/employee';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  toggleEmployee: string = "Add Employee";
  Heading: string = "Employees List";
  EmployeeList: Employee[];
  ShowAddEmployeeDialog: boolean = false;

  toggleAddEmployee(): void {
    this.toggleEmployee = this.ShowAddEmployeeDialog == true ? "Add Employee" : "Close";
    this.ShowAddEmployeeDialog = !this.ShowAddEmployeeDialog;
  }
  getEmployees(): void {
    this.employeeData.GetEmployees()
      .subscribe(employees => this.EmployeeList = employees);
  }

  OnAddEmployee(employee: Employee): void {
    this.EmployeeList.push(employee);
  }

  constructor(@Inject('EmployeeData') private employeeData) { }

  ngOnInit() {
    this.getEmployees();
  }

}
