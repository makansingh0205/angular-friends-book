import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

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

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form(): { [key: string]: AbstractControl } {
    return this.resetPasswordForm.controls;
  }

  onSubmit(){
    this.submitted = true
      
    if (this.resetPasswordForm.valid) {
      this.loading = true;
      let userDetails = this.resetPasswordForm.value
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
