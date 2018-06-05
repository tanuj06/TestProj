import { Component, OnInit, Input, Inject } from '@angular/core';
import { Employee } from '../employee/employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee : Employee;
  GetEmployee(): void
  {
    const id  = this.route.snapshot.paramMap.get('id');
    this.employeeData.GetEmployee(id).subscribe(emp => this.employee = emp); 
  }

  save(emp : Employee): void{
    this.employeeData.UpdateEmployee(emp).subscribe();
  }

  
  constructor(@Inject('EmployeeData') private employeeData, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.GetEmployee();
  }

}
