import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-radio12',
  template: `
    <form [formGroup]="data.validateForm">
      <div nz-col [nzSpan]="12">
        <nz-form-item nzFlex>
          <nz-form-label nzFor="data.name.trim()" nzRequired [nzSpan]="6">{{data.label}}</nz-form-label>
          <nz-form-control [nzSpan]="16">
            <nz-radio-group formControlName="{{data.name.trim()}}" [(ngModel)]="data.value" nzName="data.name.trim()"
                            *ngIf="data.type==='new'|| data.type ==='update'; else detailView">
              <label nz-radio *ngFor="let option of data.options" nzValue="{{option.value}}">{{option.msg}}</label>
            </nz-radio-group>
            <ng-template #detailView>{{valueMsg}}</ng-template>
            <nz-form-explain *ngIf="data.validateForm.get(data.name.trim()).dirty && data.validateForm.get(data.name.trim()).errors">
              {{data.explainMsg.trim()}}
            </nz-form-explain>
          </nz-form-control>
        </nz-form-item>
      </div>


    </form>
  `,
  styles: []
})
export class InputRadio12Component implements OnInit {

  @Input() data?: any;
  valueMsg;
  constructor() {
  }

  ngOnInit() {
    this.data.options.forEach((option) => {
      if (this.data.value === option.value ) {
        this.valueMsg = option.msg;
      }
    });
  }

}
