import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answers',
  standalone: true,
  imports: [],
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.scss',
})
export class AnswersComponent {
  allAnswers: any;

  constructor(public dataService: DataService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.onLoad();
  }
  onLoad() {
    this.allAnswers = this.dataService.getAllAnswers();
  }
}
