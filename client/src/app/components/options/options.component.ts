import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  @Input() emp_id: any = '';

  constructor(private empServ:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }


  viewEmp() {
    let url = 'details/' + this.emp_id
    this.router.navigate([url])
  }

  editEmp() {
    console.log(this.emp_id);
  }

  // deleteEmp() {
  //  this.empServ.deleteEmployee(this.employeeId)
  //  this.router.navigate(['/'])
  // }

}
