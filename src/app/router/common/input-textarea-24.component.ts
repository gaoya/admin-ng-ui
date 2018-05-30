import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-textarea24',
  template: `
    <form [formGroup]="data.validateForm">
      <div nz-col [nzSpan]="24">
        <nz-form-item nzFlex>
          <nz-form-label nzRequired [nzFor]="data.name.trim()" [nzSpan]="3">{{data.label}}</nz-form-label>
          <nz-form-control [nzSpan]="20">
            <textarea [nzAutosize]="{ minRows: 4, maxRows: 6 }" nz-input formControlName="{{data.name.trim()}}"
                      [ngModel]="data.value"
                      *ngIf="data.type==='new'|| data.type ==='update'; else detailView"></textarea>
            <ng-template #detailView>{{data.value}}</ng-template>
            <nz-form-explain
              *ngIf="data.validateForm.get(data.name.trim()).dirty
              &&data.validateForm.get(data.name.trim()).errors">
              {{data.explainMsg.trim()}}
            </nz-form-explain>
          </nz-form-control>
        </nz-form-item>
      </div>
    </form>
  `,
  styles: []
})
export class InputTextArea24Component implements OnInit {

  @Input() data?: any;

  constructor() {
  }

  ngOnInit() {
  }

}
