import { Injectable, Inject } from '@angular/core';
import { Employee } from '../../employees/employee/employee';
import { MockEmployees } from '../../mock-records/mock-records';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EmployeeDataService {

  GetEmployees() : Observable<Employee[]>{
    this.messageService.add('EmployeeService: fetched employees');
    this.messageService.add('Employees Count: '+ MockEmployees.length );

    return of(MockEmployees) ; 
  }
  constructor(@Inject('MessageService') private messageService) {  }

}
