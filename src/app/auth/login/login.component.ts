import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/auth.model';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading:boolean = false;
  returnUrl: string = '/';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted:boolean = false;

  constructor(private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true
      
    if (this.loginForm.valid) {
      this.loading = true;
      let userDetails = this.loginForm.value
      this.authService.login(userDetails).subscribe(
        {
          next: (data: any) => this.router.navigate([this.returnUrl]),
          error: (err: { message: any; }) => {
            alert(err.message)
            this.loading = false;
          },
          complete: () => console.info('Logged In')
        });
    }
  }
}
