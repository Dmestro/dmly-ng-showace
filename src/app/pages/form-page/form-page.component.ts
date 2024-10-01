import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'dmly-form-page',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatHint, MatError, MatLabel, MatButton, JsonPipe],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.less'
})
export class FormPageComponent {

  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
  });

  submit() {
    alert(JSON.stringify(this.formGroup.value));
  }
}
