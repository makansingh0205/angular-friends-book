import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../_model/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  
  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "http://3.17.216.66:3000";
  
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

  fetchAllPosts(): Observable<Posts[]>{
    return this.httpClient.get<Posts[]>(this.baseUrl+'/posts');
  }

  // updateTickets(ticketDetails: Reserve): Observable<Reserve>{
  //   return this.httpClient.put<Reserve>(this.baseUrl+'/tickets', ticketDetails);
  // }

  // fetchTicketDetails(ticketId: number): Observable<Reserve>{
  //   return this.httpClient.get<Reserve>(this.baseUrl+'/tickets/'+ticketId);
  // }

}
