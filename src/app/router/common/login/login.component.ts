import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {CommonService} from '../../../service/common/common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
  ]
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  userAndPwdError = false ;

  /**
   * 提交form 表单
   */
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }

    this.userAndPwdError = false;
    if (this.validateForm.get('userName').value !== ''
      && this.validateForm.get('password').value !== '') {
      this.common.getUser(
        this.validateForm.get('userName').value,
        this.validateForm.get('password').value
      ).subscribe((result: any) => {
        if ( result.code === '1') {
          this.router.navigate([{outlets: {app: 'layout/welcome'}}], { replaceUrl: true });
        } else {    // 错误
          this.userAndPwdError = true;
        }
      });
    }
  }

  constructor(private fb: FormBuilder, private common: CommonService, private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
}
