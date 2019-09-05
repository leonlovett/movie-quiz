import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute } from "@angular/router";

import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'test-answers';
  clientId: string;
  currentUrl: string;

  constructor(private db: AngularFirestore, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUrl = window.location.href;
    if (!this.currentUrl.includes('presenters-page')) {
      this.clientId = Math.random().toString().replace('.', '');
      this.dataService.clientId = this.clientId;
      this.db.collection('connected-clients')
        .doc(this.clientId)
        .set({
          connected: true
        });
      window.onbeforeunload = () => this.ngOnDestroy();
    }
  }

  ngOnDestroy() {
    if (!this.currentUrl.includes('presenters-page')) {
      this.db.collection('connected-clients')
        .doc(this.clientId)
        .set({
          connected: false
        });
    }
  }
}
