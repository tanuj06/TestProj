import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from '../employees/employee/employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  EmployeeList: Employee[] = [];

  constructor(@Inject('EmployeeData') private employeeData) { }

  ngOnInit() {
    this.GetEmployees();
  }

  GetEmployees(): void {
    this.employeeData.GetEmployees()
      .subscribe(employees => this.EmployeeList = employees.slice(1, 5));
  }


  
}
