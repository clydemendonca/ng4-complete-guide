import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sectionToDisplay = 'Recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBd7plOHUGP4a861BT3H3oK18__K02Iho0",
      authDomain: "hackathonphase2.firebaseapp.com",
      databaseURL: "https://hackathonphase2.firebaseio.com",
      projectId: "hackathonphase2",
      storageBucket: "hackathonphase2.appspot.com",
      messagingSenderId: "266720782438"
    });
  }

  displaySection(sectionData) {
    this.sectionToDisplay = sectionData.section;
  }


}
