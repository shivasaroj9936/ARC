import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/validators/confirmed.validators';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  spinner = false;
  showPassword = true;
  showConfirmPassword = true;
  userDetailsForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.userDetailsForm = this.formBuilder.group({
      full_name: [null, [Validators.required, Validators.minLength(3), Validators.pattern(/^((?!\s{2,}).)*$/)]],
      email: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      phone_number: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      postalcode: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{5,}$")]],
      confirm_password: [null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{5,}$")]],
    },
      {
        validator: ConfirmedValidator('password', 'confirm_password')
      })

  }
  //---------Form submit function----------

  onSubmit() {
    // this.userDetailsForm.controls.get
    this.controls.full_name.patchValue(this.controls?.full_name?.value?.trim());
    this.controls.email.patchValue(this.controls?.email?.value?.trim());
    this.controls.phone_number.patchValue(this.controls?.phone_number?.value?.trim());
    this.controls.postalcode.patchValue(this.controls?.postalcode?.value?.trim());
    this.controls.password.patchValue(this.controls?.password?.value?.trim());
    this.controls.confirm_password.patchValue(this.controls?.confirm_password?.value?.trim());
  }


  onFileChange(event: any) {
    var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    if (file) {
      var pattern = /image-*/;
      var reader = new FileReader();
      if (!file.type.match(pattern)) {
        // this.commonService.authSnackBar('invalid format', 'Close', 'red-snackbar');
        return;
      }
      // reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  }
  get controls() {
    return this.userDetailsForm.controls;
  }
  getUploadedFiles(event: any) {
    console.log(event);


  }
}
