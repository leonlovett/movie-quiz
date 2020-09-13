import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  get score() {
    return this.dataService.numberCorrect / this.dataService.answers.length || 0;
  }
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
