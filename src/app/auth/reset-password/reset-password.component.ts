import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmEqualValidator } from 'src/app/_helpers/confirm-equal-validator';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  loading:boolean = false;
  returnUrl: string = '/';
  resetPasswordForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  submitted:boolean = false;

  constructor(private fb: FormBuilder){
  }
  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validators: [ConfirmEqualValidator.matchPassword('password', 'confirmPassword')],
    })
  }

  get form(): { [key: string]: AbstractControl } {
    return this.resetPasswordForm.controls;
  }

  onSubmit(){
    this.submitted = true 
    console.log(this.resetPasswordForm, 'restpassword')
  }
}
