import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  questions = [];
  constructor() {}

  getAllQuestions() {
    return fetch('https://66b211521ca8ad33d4f66790.mockapi.io/Questions')
      .then((res) => res.json())
      .then((data) => {
        this.questions = data;
      });
  }

  loadQuestionByIdex(idx: any) {
    return this.questions[idx];
  }

  getQuestionById(id: number) {
    console.log(id);
    return fetch(
      `https://66b211521ca8ad33d4f66790.mockapi.io/Questions/${id}`
    ).then((res) => res.json());
  }
}
