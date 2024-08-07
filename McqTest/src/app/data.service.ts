import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getAllQuestions() {
    return fetch('https://66b211521ca8ad33d4f66790.mockapi.io/Questions').then(
      (res) => res.json()
    );
  }
  getQuestionById(id: number) {
    return fetch(
      `https://66b211521ca8ad33d4f66790.mockapi.io/Questions/${id}`
    ).then((res) => res.json());
  }
}
