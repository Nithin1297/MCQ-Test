import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-answers',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatCheckboxModule],
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
