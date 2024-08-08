import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-check-box',
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
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.scss',
})
export class CheckBoxComponent {
  @Input() question = {
    question_number: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correct_option: 'Paris',
    type: 'radio',
  };
  @Input() answer: any;
  @Output() AnsEvent = new EventEmitter<any>();

  testForm!: FormGroup<any>;
  // @Input() questions: any = {};
  options = this.question.options;
  selectedOptions: any;
  constructor(private fb: FormBuilder) {
    this.testForm = this.fb.group({
      idx: this.fb.array(this.options.map(() => this.fb.control(false))),
    });
    console.log(this.question.options);
  }

  ngOnChanges() {
    console.log('🎊🎊🎊🎊🎊', this.answer);
    if (!this.answer) {
      this.testForm.reset();
    } else {
      this.testForm.patchValue(this.answer);
      console.log(this.testForm.value);
    }
  }

  get optionsArray() {
    return this.testForm.get('Options') as FormArray;
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
