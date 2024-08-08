import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionsComponent } from './questions/questions.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { AnswersComponent } from './answers/answers.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'questions/:id',
    component: QuestionListComponent,
  },
  {
    path: 'scorePage',
    component: ScoreBoardComponent,
  },
  {
    path: 'Answers',
    component: AnswersComponent,
  },
];
