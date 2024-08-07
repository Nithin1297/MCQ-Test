import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  id: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllQuestions();
  }
}
