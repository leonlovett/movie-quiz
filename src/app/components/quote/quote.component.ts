import { Component, OnInit, Input } from '@angular/core';

import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  @Input() question;
  answers: Array<any> = [];
  selected: any;
  selectedMovie: any;
  wrong: boolean = false;
  selectedMovieIdx: number;

  get imageUrl() {
    return `../../assets/${this.selectedMovie.image}`;
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.answers = this.dataService.movies;
    this.answers.sort(() => Math.random() - 0.5);
  }

  movieSelected(e) {
    this.wrong = false;
    if (this.checkAnswer(e)) {
      this.selectedMovie = this.answers.find(item => item.id === e);
      this.selectedMovieIdx = this.answers.findIndex(item => item.id === e);
      this.answers.splice(this.selectedMovieIdx, 1);
      this.dataService.numberCorrect++;
      this.dataService.answers.push({
        quote: this.question.text,
        movie: this.selectedMovie.text
      });
    } else {
      this.wrong = true;
      this.selectedMovie = null;
    }
  }

  checkAnswer(submittedAnswer: string) {
    return this.question.id === submittedAnswer;
  }

  editAnswer() {
    this.answers.splice(this.selectedMovieIdx, 0, this.selectedMovie);
    this.selectedMovie = null;
  }
}
