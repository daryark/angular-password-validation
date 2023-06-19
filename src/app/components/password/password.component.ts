import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ProgressBarData } from 'src/app/models/progress-bar-data.model';

import { noCyrillic, easy, medium } from '../../schemas';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  myForm: FormGroup = new FormGroup({
    password: new FormControl(''),
  });
  isError: boolean = false;
  private isStrongPasswordShown: boolean = false;

  constructor(private toastr: ToastrService) {}

  passwordCheck(): ProgressBarData {
    const { password: p } = this.myForm.value;

    if (p.length < 8 || p.match(easy) || p.match(medium)) {
      this.isStrongPasswordShown = false;
    }

    if (p === '') return { percent: 0, color: 'grey' };
    else if (p.length < 8) return { percent: 100, color: 'warn' };
    else if (p.match(easy)) return { percent: 33, color: 'warn' };
    else if (p.match(medium)) return { percent: 66, color: 'accent' };
    else {
      if (!this.isStrongPasswordShown) {
        this.toastr.success('Yeees, your password is strong!✨', '', {
          timeOut: 3000,
          progressBar: true,
          positionClass: 'toast-top-right',
          toastClass: 'ngx-toastr',
        });
        this.isStrongPasswordShown = true;
      }
      return { percent: 100, color: 'primary' };
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (!event.key.match(noCyrillic)) {
      event.preventDefault();

      this.isError = true;
      return;
    }
    this.isError = false;
  }

  onInputBlur(): void {
    this.isError = false;
  }
}
