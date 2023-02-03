import { Component, Directive, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})

export class UserRegistrationComponent implements OnInit{

  loading:boolean = false;
  registerationForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted:boolean = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router){
      // if (this.authService.currentUserValue) {
      //   this.router.navigate(['/']);
      // }
  }
  ngOnInit(): void {
    this.registerationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get form(): { [key: string]: AbstractControl } {
    return this.registerationForm.controls;
  }

  onSubmit(){
    this.submitted = true
    console.log(this.registerationForm, 'reactiveform')
    
    if (this.registerationForm.valid) {
      this.loading = true;
      
      this.authService.register(this.registerationForm.value).subscribe(
        {
          next: (data: any) => this.router.navigate(['/login']),
          error: (err: { message: any; }) => {
            alert(err.message)
            this.loading = false;
          },
          complete: () => console.info('Registraion complete')
        });
    }

  }
}
