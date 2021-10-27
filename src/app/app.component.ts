import {Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  techList = [
    {id: 101, lang: 'Java'},
    {id: 102, lang: 'Angular'},
    {id: 103, lang: 'Hibernate'}
  ];
  constructor(private formBuilder: FormBuilder) { }
  techForm = this.formBuilder.group({
    selectedTech: ''
  });
  onFormSubmit() {
    console.log(this.techForm.get('selectedTech')?.value);
  }
}
