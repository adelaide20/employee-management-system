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



}
