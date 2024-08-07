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
  question: any;
  answer: any;
  Id: any;
  userAns: any;
  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get('id') as string; // 1 from URL
    this.question = this.dataService.loadQuestionByIdex(this.Id - 1);
    this.answer = this.dataService.loadAnswerByQNo(this.question);
  }
  gettingNextQuestion() {
    this.dataService.patchAnswer(this.userAns);
    console.log(this.userAns);
    console.log(this.userAns.idx);

    // For next question
    this.Id = +this.Id + 1;
    this.router.navigate(['questions', this.Id]);
    this.question = this.dataService.loadQuestionByIdex(this.Id - 1);
    this.answer = this.dataService.loadAnswerByQNo(this.question);
  }

  gettingPrevQuestion() {
    // For next question
    this.dataService.patchAnswer(this.userAns);
    this.Id = +this.Id - 1;
    this.router.navigate(['questions', this.Id]);
    this.question = this.dataService.loadQuestionByIdex(this.Id - 1);
    this.answer = this.dataService.loadAnswerByQNo(this.question);
  }

  pushing(ans: any) {
    ans.question_number = this.question.question_number;
    this.userAns = ans;
    console.log(ans);
  }
  submit() {
    console.log('sending..');
    this.dataService.SendUserAns();
  }
}
