import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ConfirmEqualValidator } from 'src/app/_helpers/confirm-equal-validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  changePasswordForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  submitted:boolean = false;

  constructor(private fb: FormBuilder){
  }
  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
    {
      validators: [ConfirmEqualValidator.matchPassword('password', 'confirmPassword')],
    }
    )
  }

  get form(): { [key: string]: AbstractControl } {
    return this.changePasswordForm.controls;
  }

  onSubmit(){
    this.submitted = true
    console.log(this.changePasswordForm, 'changePasswordForm')
  }
}
