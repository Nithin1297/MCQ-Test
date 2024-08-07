import { Component } from '@angular/core';
import { QuestionsComponent } from '../questions/questions.component';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [QuestionsComponent, RouterModule],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss',
})
export class QuestionListComponent {
  questionList: any;
  Id: any = 2;
  constructor(
    dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.questionList = dataService.getQuestionById(1);
    console.log(this.questionList);
  }
  ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.Id); // From URL
  }
  gettingNextQuestion(question_no: any) {
    console.log(question_no);
  }
}
