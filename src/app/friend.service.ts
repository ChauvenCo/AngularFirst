import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from './friend';
import { Observable } from 'rxjs';
import { Friends } from './friends';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  getfriendURL = "http://localhost:4567/api/friends";
  addfriendURL = "http://localhost:4567/api/friend?name=";
  
  constructor(private http: HttpClient) { }
  
  getFriends(): Observable<Friends> {
	  return this.http.get<Friends>(this.getfriendURL);
  }
}
