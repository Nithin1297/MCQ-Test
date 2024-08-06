import { Component } from '@angular/core';
import { QuestionsComponent } from '../questions/questions.component';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [QuestionsComponent],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss',
})
export class QuestionListComponent {}
