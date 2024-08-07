import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FormGroup,
  FormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { DataService } from '../data.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
})
export class QuestionsComponent {
  @Input() question = {
    question_number: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correct_option: 'Paris',
    type: 'radio',
  };
  @Input() answer: any;
  @Output() AnsEvent = new EventEmitter<any>();

  testForm: any;
  Id: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder
  ) {
    this.testForm = this.fb.group({
      idx: '',
    });
  }

  ngOnChanges() {
    console.log('🎊🎊🎊🎊🎊', this.answer);
    if (!this.answer) {
      this.answer = {
        idx: '',
      };
    }

    this.testForm.patchValue(this.answer);
  }

  get idx() {
    return this.testForm.get('idx');
  }
  pushToParent() {
    let userAns: any = this.testForm.value;
    this.AnsEvent.emit(userAns);
    console.log(userAns);
  }
}
