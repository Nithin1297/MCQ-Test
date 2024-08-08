import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.scss',
})
export class ScoreBoardComponent {
  percentage!: number;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService
      .SendUserAns()
      .then((data) => {
        this.percentage = data.percentage;
        // console.log(`Percentage: ${this.percentage}`);
      })
      .then(() => {
        (this.dataService.userAllAnswers = []),
          console.log('Final Array' + this.dataService.userAllAnswers);
      });
  }
  get percentCheck() {
    return typeof this.percentage == 'number';
  }
}
