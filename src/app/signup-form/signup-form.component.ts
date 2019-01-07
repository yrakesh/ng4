import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from '../validators/username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form= new FormGroup({
    account: new FormGroup({
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            UsernameValidator.canNotContainSpace], UsernameValidator.shouldBeUnique
          ),
          password: new FormControl()
        }
      )
    }
  )

  get username() {
    return this.form.get('account.username');
  }


  login() {
    this.form.setErrors(
      {
        invalidForm : true
      }
    )
  }
}
