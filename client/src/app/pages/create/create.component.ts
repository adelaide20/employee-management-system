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
    email: new FormControl('', [Validators.required, Validators.email]),
    contactNo: new FormControl('', [Validators.required]),
    emp_role: new FormControl('', [Validators.required]),
    start_date: new FormControl('', [Validators.required])
  });

  constructor(private serv: EmployeeService) { }

  ngOnInit(): void {
  }


  onSubmit() {

    let obj = {
      first_name: this.newEmpForm.value.first_name,
      last_name: this.newEmpForm.value.last_name,
      email: this.newEmpForm.value.email,
      contactNo: this.newEmpForm.value.contactNo,
      emp_role: this.newEmpForm.value.emp_role,
      start_date: this.newEmpForm.value.start_date
    }

   

    console.log(obj);
    

    // if (this.newEmpForm.value === "VALID") {
      this.serv.addEmployee(obj).subscribe(data => {
        console.log(data);
      })
    //   console.log(this.newEmpForm.errors);
    // }
    // else{
    //   alert("all fields are required, and in a correct format");
      
    // }

  }

}
