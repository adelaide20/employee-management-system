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
    contactno: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
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
      contactno: this.newEmpForm.value.contactno,
      position: this.newEmpForm.value.position,
      start_date: this.newEmpForm.value.start_date
    }    

    // if (this.newEmpForm.value === "VALID") {
      this.serv.addEmployee(obj).subscribe(data => {
        console.log(data);
      })
    // }
    // else{
    //   alert("all fields are required, and in a correct format");
      
    // }

  }

}
