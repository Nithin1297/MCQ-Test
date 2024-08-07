import { Component } from '@angular/core';
import { QuestionsComponent } from '../questions/questions.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [QuestionsComponent],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss',
})
export class QuestionListComponent {
  constructor(dataService: DataService) {
    this.question = dataService.getQuestionById(1);
    console.log(this.question);
  }
  question: any;
}
