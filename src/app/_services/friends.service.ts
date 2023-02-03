import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Friends } from '../_model/friends.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = environment.baseUrl;

  createFriendRequest(friendRequest: Friends): Observable<Friends> {
    return this.httpClient.post<Friends>(this.baseUrl + '/friends/createrequest', friendRequest);
  }

  updateFriendRequest(updateRequest: Friends): Observable<Friends> {
    return this.httpClient.put<Friends>(this.baseUrl + '/friends/'+updateRequest.id, updateRequest);
  }

  fetchAllFriends(): Observable<Friends[]> {
    return this.httpClient.get<Friends[]>(this.baseUrl + '/friends');
  }

  getFriendsRequestById(id:string): Observable<Friends> {
    return this.httpClient.get<Friends>(this.baseUrl + '/friends/'+id);
  }

}
