import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getAllQuestions() {
    return fetch('https://backend-project-2s74.onrender.com/form').then(
      (res) => res.json()
    );
  }
  getQuestionById(id : number) {
    return fetch(`https://backend-project-2s74.onrender.com/form/${id}`).then(
      (res) => res.json()
    );
  }
}
