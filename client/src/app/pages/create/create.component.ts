import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  newEmpForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    contactNo: new FormControl(''),
    emp_role: new FormControl(''),
    start_date: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
