import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-staff-member',
  templateUrl: './add-new-staff-member.component.html',
  styleUrls: ['./add-new-staff-member.component.scss']
})
export class AddNewStaffMemberComponent implements OnInit {
  newStaffDetails!: FormGroup;
  spinner = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.newStaffDetails = this.formBuilder.group({
      first_name: [null, [Validators.required, Validators.minLength(3), Validators.pattern(/^((?!\s{2,}).)*$/)]],
      last_name: [null, [Validators.required, Validators.minLength(3), Validators.pattern(/^((?!\s{2,}).)*$/)]],
      email: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
    })

  }
  onSubmit() {
    this.controls.first_name.patchValue(this.controls?.first_name?.value?.trim());
    this.controls.last_name.patchValue(this.controls?.last_name?.value?.trim());
    this.controls.email.patchValue(this.controls?.email?.value?.trim());
  }
  get controls() {
    return this.newStaffDetails.controls;
  }
}
