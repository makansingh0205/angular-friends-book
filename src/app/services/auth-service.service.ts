import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  baseUrl: string = "http://3.17.216.66:3000";

  constructor(private httpClient: HttpClient) { }

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

  login(userDetails: User): Observable<User>{
    return this.httpClient.post<User>(this.baseUrl+'/users/authenticate', userDetails);
  }

  // updateTickets(ticketDetails: Reserve): Observable<Reserve>{
  //   return this.httpClient.put<Reserve>(this.baseUrl+'/tickets', ticketDetails);
  // }

  // fetchTicketDetails(ticketId: number): Observable<Reserve>{
  //   return this.httpClient.get<Reserve>(this.baseUrl+'/tickets/'+ticketId);
  // }


}
