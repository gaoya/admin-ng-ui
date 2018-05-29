import {Component, Input, OnInit} from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-admin-view',
  templateUrl: './adminView.component.html',
  styleUrls: ['./adminView.component.css']
})
export class AdminViewComponent implements OnInit {

  @Input() type: string;
  @Input() subtitle: string;
  sex = '0';
  validateForm: FormGroup;

  constructor(private modal: NzModalRef, private fb: FormBuilder) { }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  ngOnInit(): void {
    this.validateFormRule();
  }

  /**
   * 验证form 表单
   */
  validateFormRule(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      // sex: [0, [Validators.min(0), Validators.max(2)]],
      age: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      qq: [null, [Validators.required]],
      useFlag: [null, [Validators.required]],
      delFlag: [null, [Validators.required]],
      createTime: [null, [Validators.required]],
      createUser: [null, [Validators.required]],
      remark:  [null, [Validators.required]],
    });
  }
}
