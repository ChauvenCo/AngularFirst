import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from './friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  friendURL = "http://localhost:4567/api/friends";
  preFriends: Friend[] = [{name: "Titouen"}];
  
  constructor(private http: HttpClient) { }
  
  getFriends(): Observable<Friend[]> {
	  return this.http.get<Friend[]>(this.friendURL);
  }
}
