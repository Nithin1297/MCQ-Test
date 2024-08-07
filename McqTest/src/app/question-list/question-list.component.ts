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
  Id: any = 1;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get('id') as string; // 1 from URL
    this.question = this.dataService.loadQuestionByIdex(this.Id - 1);
    console.log(this.Id); // From URL
    console.log(this.question);
  }
  gettingNextQuestion() {
    this.Id = +this.Id + 1;
    this.router.navigate(['questions', this.Id]);
    this.question = this.dataService.loadQuestionByIdex(this.Id - 1);
  }
}
