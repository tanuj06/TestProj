import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../../employees/employee/employee';
import { Observable, observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeDataService {
 
  private employeeurl = 'api/MockEmployees';

  constructor(@Inject('MessageService') private messageService , private http: HttpClient) {  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      console.error(error +  "error");
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  GetEmployees() : Observable<Employee[]>{
    this.messageService.add('EmployeeService: fetched employees from angular inbuild api');
    return this.http.get<Employee[]>(this.employeeurl).pipe(
      tap(employee => { this.log("fetched employees");} ),
      catchError(this.handleError('getEmployees', []))
    );
  }

  GetEmployee(id : string) : Observable<Employee>{
    this.messageService.add('EmployeeService: fetched employee from angular inbuild api based on id');
    const url = `${this.employeeurl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(emp => this.log("fetched single employee")),
      catchError(this.handleError<Employee>(`GetEmployee id=${id}`))
    );
  }

  UpdateEmployee(employee : Employee) : Observable<any>{
    this.messageService.add('EmployeeService: Updated the selected employee');
    return this.http.put(this.employeeurl, employee, { headers: new HttpHeaders( {'Content-Type': 'application/json' })}).pipe(
      tap(emp => this.log("updated selected employee = " + `${employee.id}`)),
      catchError(this.handleError<any>(`UpdateEmployee`))
    );
  }

  private log(message: String): void{
    this.messageService.add(Date.now.toString() + ": EmployeeService : " + message)
  }
 

}
