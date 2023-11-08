import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  @Input() emp_id: any = '';

  details: any;

  detailsForm = new FormGroup({
    email: new FormControl(''),
    contactno: new FormControl(''),
    // position: new FormControl(''),
    // status: new FormControl(''),
  });

  constructor(private empServ: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.empServ.getEmployeeById(this.emp_id).subscribe((data: any) => {
      this.details = data[0]

      console.log(this.details);

    })
  }

  // edit employee details
  editEmp() {

    // if the form data is not inserted then use the old data
    if ((this.detailsForm.value.email || this.detailsForm.value.contactno || this.detailsForm.value.position || this.detailsForm.value.status) === '') {
      this.detailsForm.value.email = this.details.email,
        this.detailsForm.value.contactno = this.details.contactno
        // this.detailsForm.value.position = this.details.position,
        // this.detailsForm.value.status = this.details.status
    }

    // object holding the data from the form
    let updatedetails = {
      email: this.detailsForm.value.email,
      contactno: this.detailsForm.value.contactno
      // position: this.detailsForm.value.position,
      // status: this.detailsForm.value.status
    };

    // update fucntion
    this.empServ.editEmployee(this.emp_id, updatedetails).subscribe((data: any) => {
      data
      alert(data);
    })

  }



  // remove an employee from the system
  deleteEmp() {
    // change the visibility
    let removed = "true";

    this.empServ.deleteEmployee(this.emp_id, removed).subscribe(data => {
      alert(`by clicking 'ok', you are removing ${this.details.full_name} from the system`)
      console.log(data);
      this.router.navigate(['dash'])
    })
  }


}
