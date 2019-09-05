import { Injectable } from '@angular/core';

import { answers } from "../utils/constants";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movies: Array<any> = answers;
  numberCorrect: number = 0;

  answers: Array<any> = [];
  clientId: string;

  constructor() { }
}
