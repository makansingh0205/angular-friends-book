import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_model/users.model';
import { UserService } from 'src/app/_services/user.service';

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
    private userService: UserService,
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
      this.userService.login(userDetails).subscribe(
        {
          next: (data: any) => {
            this.userService.isLoggedIn = true;
            this.router.navigate([this.returnUrl])},
          error: (err: { message: any; }) => {
            alert(err.message)
            this.loading = false;
          },
          complete: () => console.info('Logged In')
        });
    }
  }
}
