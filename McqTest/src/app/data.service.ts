import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  questions: any = [];
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

  loadAnswerByQNo(question: any) {
    console.log(question);
    const answer = this.userAllAnswers.find(
      (ans: any) => ans.question_number == question.question_number
    );

    return answer;
  }

  getQuestionById(id: number) {
    return fetch(`https://backend-project-2s74.onrender.com/form/${id}`).then(
      (res) => res.json()
    );
  }
  patchAnswer(userAns: any) {
    const qNo = this.userAllAnswers.findIndex(
      (obj: { question_number: any }) =>
        obj.question_number == userAns.question_number
    );
    if (qNo < 0) {
      this.userAllAnswers.push(userAns);
    } else {
      this.userAllAnswers[qNo] = userAns;
    }
    console.log(userAns);
    // this.userAllAnswers.push(userAns);
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
