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
    return fetch('https://backend-project-2s74.onrender.com/form/')
      .then((res) => res.json())
      .then((data) => {
        this.questions = data;
        this.len = this.questions.length;
        return this.questions;
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

    const convertAnsForAPI = this.userAllAnswers.map((ans: any) =>
      typeof ans.idx == 'string'
        ? { ...ans, idx: [ans.idx] }
        : {
            ...ans,
            idx: ans.idx
              .map((checked: boolean, i: number) => (checked ? i + '' : null))
              .filter((v: string | null) => v !== null),
          }
    );

    fetch(`https://backend-project-2s74.onrender.com/form/add`, {
      method: 'POST',
      body: JSON.stringify(convertAnsForAPI),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }

  getScoreP(): Promise<string> {
    return fetch(`https://backend-project-2s74.onrender.com/form/per`).then(
      (res) => res.json()
    );
  }

  getAllAnswers(): any {
    return [
      {
        question_number: 1,
        question: 'What is the capital of Japan?',
        correct_option: 'Tokyo',
      },
      {
        question_number: 2,
        question: 'Which of the following are programming languages?',
        correct_option: ['Python', 'Java'],
      },
      {
        question_number: 3,
        question: 'What is the largest planet in our solar system?',
        correct_option: 'Jupiter',
      },
      {
        question_number: 4,
        question: 'Select the primary colors:',
        correct_option: ['Red', 'Blue', 'Yellow'],
      },
      {
        question_number: 5,
        question: "Which element has the chemical symbol 'O'?",
        correct_option: ['Oxygen', 'Gold', 'Silver', 'Hydrogen'],
      },
      {
        question_number: 6,
        question: 'Which of the following are continents?',
        correct_option: ['Africa', 'Europe', 'Antarctica'],
      },
    ];
  }
}
