import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

import { quantitySelection, answers, questions } from "../../utils/constants";

@Component({
  selector: 'app-presenters-page',
  templateUrl: './presenters-page.component.html',
  styleUrls: ['./presenters-page.component.scss']
})
export class PresentersPageComponent implements OnInit {

  numberOfConnectedClients: number;
  numberOfCompletedTests: number;
  testQuantity: number;
  quotes: Array<any> = questions;
  movies: Array<any> = answers;
  testResults: Array<any>;
  randValue: number;
  quantities: Array<number> = quantitySelection;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('connected-clients', ref => ref.where('connected', '==', true))
      .snapshotChanges().subscribe(x => {
        this.numberOfConnectedClients = x.length;
      });
    this.db.collection('answers')
      .snapshotChanges().subscribe(x => {
        this.numberOfCompletedTests = x.length;
      })
  }

  runBrowserTests() {
    this.testResults = [];
    for (let i = 0; i < this.testQuantity; i++) {
      const tempTest = [];
      const chosenRandoms = [];
      this.quotes.forEach(quote => {
        const tempResult = {};
        tempResult['quote'] = quote;
        const rand = this.checkRandom(chosenRandoms);
        const guess = this.movies[this.randValue];
        tempResult['answer'] = guess;
        tempTest.push(tempResult);
      });
      this.testResults.push(tempTest);
    }
  }

  checkRandom(chosen: Array<any>) {
    this.randValue = Math.floor(Math.random() * this.movies.length);
    if (!chosen.includes(this.randValue)) {
      chosen.push(this.randValue);
      return this.randValue;
    }
    if (chosen.includes(this.randValue)) {
      this.checkRandom(chosen);
    }
  }
}
