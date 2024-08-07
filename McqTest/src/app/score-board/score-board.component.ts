import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [],
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.scss'
})
export class ScoreBoardComponent {
  percentage !: string;
  constructor(private dataService : DataService){}
  getScore(){
    return this.dataService.getScoreP().then((data) => this.percentage = data)
  }

}
