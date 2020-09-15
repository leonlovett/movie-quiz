import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  get score() {
    return this.dataService.numberCorrect / 8 || 0;
  }

  get status() {
    return `${this.dataService.numberCorrect}/8 correct`;
  }
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
