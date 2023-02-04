import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { Users } from 'src/app/_model/users.model';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ DatePipe ] 
})
export class ProfileComponent implements OnInit {

  userInfo: Users ={
    isAdmin: false,
    isActive: false,
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    photoId: '',
    createdDate: '',
    token: ''
  };
  isEdit: boolean = true
  loading:boolean = false;
  returnUrl: string = '/';
  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl('')
  });
  submitted:boolean = false;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    let user = this.userService.retrieveUser();
    this.userInfo = JSON.parse(user || '')
    this.userService.fetchAUser(this.userInfo._id).subscribe((res) => {
      this.userInfo = res
    })

    this.profileForm = this.fb.group({
      firstName: [this.userInfo.firstName, [Validators.required]],
      lastName: [this.userInfo.lastName, [Validators.required]],
      email: [this.userInfo.email, [Validators.required]],
      dob: [this.datePipe.transform(this.userInfo.dob, 'yyyy-MM-dd'), [Validators.required]],
      gender: [this.userInfo.gender, [Validators.required]]
    })
  }

  get form(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
  }

  onEdit(){
    this.isEdit=false
    console.log(this.isEdit)
  }

  onSubmit(){
    this.submitted = true
      
    if (this.profileForm.valid) {
      this.loading = true;
      let userDetails = this.profileForm.value
      this.userService.updateUser(userDetails, this.userInfo._id).subscribe(
        {
          next: (data: any) => true,
          error: (err: { message: any; }) => {
            alert(err.message)
            this.loading = false;
            this.isEdit=false
          },
          complete: () => console.info('User Updated!')
        });
    }
  }



}
