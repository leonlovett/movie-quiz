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
export class TestComponent {
  questions: Array<any> = questions;
  selectedMovie: string;
  submitted: boolean = false;

}
