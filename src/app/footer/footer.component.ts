import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerText: string;
  
  constructor() {
	this.footerText = "&#169; QIEAM 2022"
  }

  ngOnInit(): void {
  }

}
