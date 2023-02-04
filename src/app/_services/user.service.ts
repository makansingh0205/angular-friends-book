import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User, Users } from '../_model/users.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = environment.baseUrl;

  storeToken(token: string): void {
    localStorage.setItem("jwtToken", token);
  }

  deleteToken(): void {
    localStorage.removeItem("jwtToken")
  }

  retrieveToken(): string | null {
    return localStorage.getItem("jwtToken");
  }

  retrieveUser(): string | null {
    return localStorage.getItem("user");
  }

  register(userDetails: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + '/users/register', userDetails);
  }

  login(userDetails: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/users/authenticate', userDetails)
    .pipe(map(user => {
      localStorage.setItem('jwtToken', user.token);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
  }));
  }

  fetchAllUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.baseUrl + '/users');
  }

  fetchAUser(userId: string): Observable<Users> {
    return this.httpClient.get<Users>(this.baseUrl + '/users/' + userId);
  }

  updateUser(updatedUser: any): Observable<Users> {
    return this.httpClient.put<any>(this.baseUrl + '/users/' + updatedUser.id, updatedUser);
  }

  findUserByEmail(email: string): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/users/finduserbyemail', { email: email });
  }

  updateUserPhotoId(updatedUser: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/users/updateuserphotoId', updatedUser);
  }

}
