import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "http://3.17.216.66:3000";

  storeToken(token: string): void{
    localStorage.setItem("jwtToken", token);
  }

  deleteToken(): void{
    localStorage.removeItem("jwtToken")
  }

  retrieveToken(): string | null{
    return localStorage.getItem("jwtToken");
  }
  
  // fetchAllBus(): Observable<Bus[]>{
  //   return this.httpClient.get<Bus[]>(this.baseUrl+'/bus');
  // }

  // searchBus(busFromId: number, busToId: number): Observable<Bus[]>{
  //   return this.httpClient.get<Bus[]>(this.baseUrl+'/bus?busFromId='+busFromId + '&busToId='+busToId);
  // }

  // fetchABus(id: number): Observable<Bus>{
  //   return this.httpClient.get<Bus>(this.baseUrl+'/bus/'+id);
  // }

  // updateBusDetails(id: number, busDetails: Bus): Observable<Seats>{
  //   return this.httpClient.put<Seats>(this.baseUrl+'/bus/'+id, busDetails);
  // }

  // fetchAllTicket(): Observable<Reserve[]>{
  //   return this.httpClient.get<Reserve[]>(this.baseUrl+'/tickets');
  // }

  register(userDetails: User): Observable<User>{
    return this.httpClient.post<User>(this.baseUrl+'/users/register', userDetails);
  }

  login(userDetails: any): Observable<any>{
    console.log(userDetails, 'userDetails')
    return this.httpClient.post<any>(this.baseUrl+'/users/authenticate', userDetails);
  }

  // updateTickets(ticketDetails: Reserve): Observable<Reserve>{
  //   return this.httpClient.put<Reserve>(this.baseUrl+'/tickets', ticketDetails);
  // }

  // fetchTicketDetails(ticketId: number): Observable<Reserve>{
  //   return this.httpClient.get<Reserve>(this.baseUrl+'/tickets/'+ticketId);
  // }

}
