import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  mainTitle: string;
  subTitle: string;
  buttonText: string;
  
  constructor() {
	this.mainTitle = "Hello"
	this.subTitle = "Your games and friends in one place. Let's go."
	this.buttonText = "Learn More"
  }

  ngOnInit(): void {
  }

}
