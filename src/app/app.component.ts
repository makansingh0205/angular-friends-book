import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from './_model/users.model';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
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
 
  constructor(private userService: UserService,    
    private router: Router) {}

  ngOnInit(): void {
    let user = this.userService.retrieveUser();
    this.userInfo = JSON.parse(user || '')
    let token = this.userService.retrieveToken();
    if(this.userInfo.token && token){
      this.userService.isLoggedIn = true
    }    
  }

  logout(){
    this.userService.deleteToken();
    this.router.navigate(['login'])
    this.userService.isLoggedIn = false
  }

  isLoggedIn(){
    return this.userService.isLoggedIn
  }
}
