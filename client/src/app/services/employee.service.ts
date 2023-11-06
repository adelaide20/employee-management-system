import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = []

  constructor(private http: HttpClient) { }

  // returns list of all employees
  getAllEmployees() {
    return this.http.get(`${environment.apiurl}` + '/api/all');
  }

  // get employee by id
  getEmployeeById(emp_id: any) {
    return this.http.get(`${environment.apiurl}` + '/api/one/' + emp_id)
  }

  //add employee 
  addEmployee(employee: Employee) {
    return this.http.post(`${environment.apiurl}` + '/api/new', employee);
  }

  // delete employee
  deleteEmployee(emp_id: any) {
    return this.http.get(`${environment.apiurl}` + '/api/remove/' + emp_id)
  }



}
