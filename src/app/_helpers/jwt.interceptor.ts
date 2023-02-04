import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserService } from '../_services/user.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token = this.userService.retrieveToken();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    
    return next.handle(request);
  }
}
