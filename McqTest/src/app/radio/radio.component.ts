import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {
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
