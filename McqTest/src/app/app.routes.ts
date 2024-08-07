import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionsComponent } from './questions/questions.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'question-list',
    component: QuestionListComponent,
  },
];
