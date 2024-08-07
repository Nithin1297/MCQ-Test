import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
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
import { MatButtonModule } from '@angular/material/button';
