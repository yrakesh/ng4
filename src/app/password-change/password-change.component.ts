import { PasswordValidator } from './../validators/password.validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form= new FormGroup({
    oldPWD: new FormControl('', [
      Validators.required,
      PasswordValidator.isIncorrectOLDPWD 
    ]
    ),
    newPWD: new FormControl('', Validators.required),
    cnfPWD: new FormControl('', Validators.required)
  }, PasswordValidator.passwordsShouldMatch);

  get oldPWD() { return this.form.get('oldPWD'); }
  get newPWD() { return this.form.get('newPWD'); }
  get cnfPWD() { return this.form.get('cnfPWD'); }
}
