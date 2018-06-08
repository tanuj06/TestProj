import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee/employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output() newEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Input() showdialog : boolean;
  @Input()employee : Employee;

  addemployee(employee: Employee): void {
    employee.name = employee.name.trim();
    if(!employee.name) return;
    this.employeeData.AddEmployee( employee as Employee).subscribe(emp => this.newEmployee.emit(emp));
  }


  constructor(@Inject('EmployeeData')  private employeeData) { 
    this.employee = new Employee();
   }

  ngOnInit() {
  }

}
