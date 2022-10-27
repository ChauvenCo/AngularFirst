import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  firstOptionTitle: string;
  firstOptionText: string;
  firstOptionButton: string;
  
  secondOptionTitle: string;
  secondOptionText: string;
  secondOptionTextRequire: string;
  secondOptionButton: string;
  
  thirdOptionTitle: string;
  thirdOptionText: string;
  thirdOptionTextRequire: string;
  thirdOptionButton: string;
  
  friends: Friend[] = [];
  
  constructor(private friendService: FriendService) {
	this.firstOptionTitle = "View friends";
	this.firstOptionText = "List all your friends";
	this.firstOptionButton = "View friends";
	
	this.secondOptionTitle = "Add friend";
	this.secondOptionText = "Give the name and add to your list";
	this.secondOptionTextRequire = "Nom de l'ami à ajouter";
	this.secondOptionButton = "Add friend";
	
	this.thirdOptionTitle = "Remove friend";
	this.thirdOptionText = "Want to break with friend ? Remove him/her from your list";
	this.thirdOptionTextRequire = "Nom de l'ami à supprimer";
	this.thirdOptionButton = "Delete friend";
  }

  ngOnInit(): void {
  }
  
  viewFriends(): void {
	this.friendService.getFriends().subscribe(res => this.friends);
  }

  addFriend(nameOfFriend: string): void {
	  //this.preFriends.push({name: nameOfFriend});
  }
  
  removeFriend(name: string): void {
    /*let index = 0;
    for (let i = 0; i < this.preFriends.length; i++)
    {
      if (this.preFriends[i].name == name) index = i;
    }
    this.preFriends.splice(index, 1);*/
  }
  
  myEncode(toEncode: string): string {
	return btoa(toEncode);
  }
}
