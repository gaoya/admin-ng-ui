import {Component, Input, OnInit} from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-admin-view',
  templateUrl: './adminView.component.html',
  styleUrls: ['./adminView.component.css'],
})

/***
 *   文档使用说明：
 *    在使用过程中会使用到更新检查的操作，在父页面的使用，打开该页面的时候，会若没有进行复制操作，会默认复制为null ,若在该页面进行一个值的定义，比如
 *    sex=1 ，则会是程序在处理的时候，有AdminComponent 中传过来的sex = null (若AdminConmponent 没有赋值的情况下)，这样就会导致2次检验的值不对。
 *    所以会报更新检查错误。
 *    所以在处理过程中一定要保证传入数据值的一致性。
 */
export class AdminViewComponent implements OnInit {

  @Input() type: string;
  @Input() subtitle: string;
  validateForm: FormGroup;
  @Input() sexValue;
  constructor(private modal: NzModalRef, private fb: FormBuilder) { }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
      console.log(' controls == ' + this.validateForm.controls[ i ]) ;
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
    // this.sexModel = '0';
    console.log('.....' + this.sexValue);
    this.validateFormRule();
  }

  /**
   * 验证form 表单
   */
  validateFormRule(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      sex: ['0', [Validators.required]],
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
