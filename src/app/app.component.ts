import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup = new FormGroup({
    password: new FormControl(''),
  });

  passwordCheck(): string {
    const p = this.myForm.value.password;

    const easy = /^(?:\d+|[a-z]+|[^a-z\d]+)$/i;
    const medium = /^(?:[a-z\d]+|([^a-z]+\/)|([^/d]+\/))$/i;

    if (p === '') return 'grey';
    else if (p.match(easy)) return 'easy';
    else if (p.match(medium)) return 'medium';
    else return 'strong';
  }
}
