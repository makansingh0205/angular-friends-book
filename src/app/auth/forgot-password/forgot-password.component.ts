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

  
  loading:boolean = false;
  returnUrl: string = '/';
  forgotPasswordForm: FormGroup = new FormGroup({
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
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form(): { [key: string]: AbstractControl } {
    return this.forgotPasswordForm.controls;
  }

  onSubmit(){
    this.submitted = true
      
    if (this.forgotPasswordForm.valid) {
      this.loading = true;
      let userDetails = this.forgotPasswordForm.value
      this.userService.login(userDetails).subscribe(
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
