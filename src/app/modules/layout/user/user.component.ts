import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/validators/confirmed.validators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  changePasswordForm!: FormGroup;
  hasError = false;
  spinner = false;
  showCurrentPassword = true;
  showNewPassword = true;
  showConfirmPassword = true;
  toEdit=true;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.changePasswordForm = this.formBuilder.group({
      current_password: [null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{5,}$")]],
      confirm_password: [null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{5,}$")]],
      new_password: [null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{5,}$")]],
    },
      {
        validator: ConfirmedValidator('new_password', 'confirm_password')
      });
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
  onSubmit() {
    this.controls.current_password.patchValue(this.controls?.current_password?.value?.trim());
    this.controls.confirm_password.patchValue(this.controls?.confirm_password?.value?.trim());
    this.controls.new_password.patchValue(this.controls?.new_password?.value?.trim());
  }
  get controls() {
    return this.changePasswordForm.controls;
  }
}
