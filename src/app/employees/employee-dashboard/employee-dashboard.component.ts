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

  Heading:string = "Employees List";
  EmployeeList : Employee[];

  SelectedEmployee: Employee;

  onSelect(employee : Employee) : void {
    this.SelectedEmployee = employee;
  }

  getEmployees(): void {
    this.employeeData.GetEmployees()
        .subscribe(employees => this.EmployeeList = employees);
  }
  constructor(@Inject('EmployeeData') private employeeData ) { }

  ngOnInit() {
    this.getEmployees();
  }

}
