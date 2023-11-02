import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employees: Employee[] = []  // variables holding all the employees
  
  constructor(private employeeServ: EmployeeService) { }

  ngOnInit(): void {
    this.employeeServ.getAllEmployees().subscribe((data:any)=>{
      this.employees = data
    })
  }

}
