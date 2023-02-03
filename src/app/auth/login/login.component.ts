import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/auth.model';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted:boolean = false;

  constructor(private fb: FormBuilder,
    private authService: AuthServiceService){
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  get form(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true
    console.log(this.loginForm, 'reactiveform')
    let userDetails = this.loginForm.value
    this.authService.login(userDetails).subscribe((res) => {
      console.log(res,'res')
    })
  }
}
