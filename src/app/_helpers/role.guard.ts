import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
    constructor(
        private authService: AuthService        
    ) {}

    canActivate() {      
        const currentUser = this.authService.currentUserValue;
        if (currentUser.role == "admin") {
            return true;
        }
        return false;
    }
}