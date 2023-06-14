import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup = new FormGroup({
    password: new FormControl(''),
  });

  match(pass: string, reg: any) {
    return pass.match(reg);
  }

  passwordCheck(): string {
    const { match } = this;
    const d = /^\d+$/;
    const l = /^[a-zA-z]+$/i;
    const dL = /^[A-Za-z\d]+$/;

    const pass = this.myForm.value.password;

    if (match(pass, l) || match(pass, d) !== null) {
      return 'easy';
    } else if (match(pass, dL) !== null) {
      return 'medium';
    } else {
      return 'grey';
    }
    switch (pass) {
      // case password.match(/^[\d+]|[A-Za-z]+|[^\dA-Za-z]+$/):
      //   console.log('e');
      //   return 'easy';

      // case password.match(/^[A-Za-z\d]+$/):
      //   console.log('m');
      //   return 'medium';

      // case password.match(/^[A-Za-z\d/$%&?]+$/):
      //   console.log(password.match(/^[A-Za-z\d/$%&?]+$/));
      //   console.log('s');
      //   return 'strong';

      default:
        return 'grey';
    }
  }
}
