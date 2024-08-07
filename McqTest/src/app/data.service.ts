import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  questions = [];
  answers = [];
  userAllAnswers: any = [];
  len: any;
  constructor() {}
  getAllQuestions() {
    return fetch('https://66b211521ca8ad33d4f66790.mockapi.io/Questions')
      .then((res) => res.json())
      .then((data) => {
        this.questions = data;
        this.len = this.questions.length;
      });
  }

  loadQuestionByIdex(idx: any) {
    return this.questions[idx];
  }

  loadAnswerByIdex(idx: any) {
    return this.userAllAnswers[idx];
  }

  getQuestionById(id: number) {
    return fetch(`https://backend-project-2s74.onrender.com/form/${id}`).then(
      (res) => res.json()
    );
  }
  patchAnswer(userAns: any) {
    this.userAllAnswers.push(userAns);
    console.log(this.userAllAnswers);
  }
  SendUserAns() {
    console.log(this.userAllAnswers);
    fetch(`https://backend-project-2s74.onrender.com/form/add`, {
      method: 'POST',
      body: JSON.stringify(this.userAllAnswers),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }
}
