import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  newEmpForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    contactNo: new FormControl('', [Validators.required]),
    emp_role: new FormControl('', [Validators.required]),
    start_date: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required]),
  });

  constructor(private serv: EmployeeService) { }

  ngOnInit(): void {
  }


  onSubmit() {

    let obj = {
      first_name: this.newEmpForm.value.id,
      last_name: this.newEmpForm.value.name,
      email: this.newEmpForm.value.email,
      contactNo: this.newEmpForm.value.imageUrl,
      emp_role: this.newEmpForm.value.gender,
      start_date: this.newEmpForm.value.birthYear,
      photo: this.newEmpForm.value.position
    }

    if (this.newEmpForm.value === "VALID") {
      this.serv.addEmployee(obj).subscribe(data => {
        console.log(data);
      })
    }

  }

}
