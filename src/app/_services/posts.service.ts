import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Posts } from '../_model/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = environment.baseUrl;

  createAPosts(post: Posts): Observable<Posts[]> {
    return this.httpClient.post<Posts[]>(this.baseUrl + '/posts/createpost', post);
  }

  fetchAllPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.baseUrl + '/posts');
  }

  getAPosts(postId: string): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.baseUrl + '/posts/createpost/' + postId);
  }

  updateAPosts(updtatedPost: Posts): Observable<Posts[]> {
    return this.httpClient.put<Posts[]>(this.baseUrl + '/posts/createpost/' + updtatedPost.id, updtatedPost);
  }

  deleteAPosts(postId: string): Observable<any> {
    return this.httpClient.delete<Posts>(this.baseUrl + '/posts/createpost/' + postId);
  }

  fetchAllPostsByUser(userId: string): Observable<Posts[]> {
    return this.httpClient.post<Posts[]>(this.baseUrl + '/posts/findpostbyuserid', { id: userId });
  }

  postsBulkUpdate(updatePayload: any): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + '/posts/updatemanyposts', updatePayload);
  }

}
