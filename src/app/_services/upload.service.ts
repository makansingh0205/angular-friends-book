import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Friends } from '../_model/friends.model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = environment.baseUrl;

  uploadFile(formData: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/files/uploadfile', formData);
  }

  getAFile(photoId:string) {
    return this.httpClient.get(this.baseUrl + '/files/'+photoId, { responseType: 'blob'});
  }

}
