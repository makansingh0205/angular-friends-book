import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Users } from '../_model/users.model';
import { UserService } from '../_services/user.service';


@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
    
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
    }
    constructor(        
        private router: Router,
        private userService: UserService        
    ) {}

    canActivate() {     
        let user = this.userService.retrieveUser();
        this.userInfo = JSON.parse(user || '')
        let token = this.userService.retrieveToken();
        if(this.userInfo.isAdmin && token){
          return true
        }  
        this.router.navigate(['/']);
        return false;
    }
}