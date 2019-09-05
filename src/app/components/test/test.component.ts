import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { AngularFirestore } from "@angular/fire/firestore";

import { questions } from "../../utils/constants";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  questions: Array<any> = questions;
  selectedMovie: string;
  submitted: boolean = false;

  constructor(public dataService: DataService, private snackBar: MatSnackBar, private db: AngularFirestore) { }

  ngOnInit() {
  }

  submitAnswers() {
    this.db.collection('answers')
      .doc(this.dataService.clientId)
      .set({
        answers: this.dataService.answers
      })
      .then(() => {
        this.snackBar.open('Thanks for participating!')
          .afterOpened()
          .subscribe(() => {
            this.submitted = true;
          })
      })
  }
}
