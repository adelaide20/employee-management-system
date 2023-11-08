import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: Employee | undefined;

  emp_id:any;

  constructor(private empserv: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.emp_id = this.route.snapshot.paramMap.get('emp_id') || '';

    this.empserv.getEmployeeById(this.emp_id).subscribe((data: any) => {
      this.employee = data[0]
    })

  }

}
