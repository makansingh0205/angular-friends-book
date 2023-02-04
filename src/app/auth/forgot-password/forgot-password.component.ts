import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    dob: new FormControl('')
  });
  submitted:boolean = false;

  constructor(private fb: FormBuilder){
  }
  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required]],
      dob: ['', [Validators.required]]
    })
  }

  get form(): { [key: string]: AbstractControl } {
    return this.forgotPasswordForm.controls;
  }

  onSubmit(){
    this.submitted = true
    console.log(this.forgotPasswordForm)
  }

}
