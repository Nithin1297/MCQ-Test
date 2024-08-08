import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [],
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.scss',
})
export class ScoreBoardComponent {
  percentage!: number;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.SendUserAns().then((data) => {
      this.percentage = data.percentage;
      console.log(`Percentage: ${this.percentage}`);
    });
  }

  get percentCheck(){
    return typeof this.percentage == 'number'
  }
}
