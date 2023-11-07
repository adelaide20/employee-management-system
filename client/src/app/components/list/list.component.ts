import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() emp_id: any = '';
  employees: Employee[] = []  // variables holding all the employees
  
  constructor(private employeeServ: EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.employeeServ.getAllEmployees().subscribe((data:any)=>{
      this.employees = data
    })
  }

  viewEmp(emp_id:any) {
    let url = 'details/' + emp_id
    this.router.navigate([url])
  }


}
