import { Component, OnInit, Inject, Input } from '@angular/core';
import { MailService } from '../Services/MailService/mail.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @Input() Name : string;
  @Input() Id : number;
  @Input() Contact : number;
  @Input() Designation : string;
  onClicked( value)
  {
    Response.redirect("./employees/employee/employee-dashboard/employee-dashboard.component.html");
  }
  constructor(@Inject('Verify') private verify, private mail: MailService ) { }

  ngOnInit() {
  }

}
