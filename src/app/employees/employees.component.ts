import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from './employee/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


  @Output() Update = new EventEmitter();
  constructor(@Inject("MessageService") public messageService) {
  }

  ngOnInit() {
  }

}
