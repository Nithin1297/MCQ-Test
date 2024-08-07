import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  testForm!: FormGroup<any>;
  @Input() questions: any = {};

  onSubmit() {
    const selectedOptions = this.testForm.value.opts
      .map((checked: boolean, i: number) => (checked ? i : null))
      .filter((v: string | null) => v != null);
  }
}
