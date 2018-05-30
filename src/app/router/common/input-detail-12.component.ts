import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-detail12',
  template: `
      <div nz-col [nzSpan]="12">
        <nz-form-item nzFlex  *ngIf="data.type==='detail'">
          <nz-form-label  [nzSpan]="6">{{data.label}}</nz-form-label>
          <nz-form-control [nzSpan]="16">
            {{data.value}}
          </nz-form-control>
        </nz-form-item>
      </div>
  `,
  styles: []
})
export class InputDetail12Component implements OnInit {

  @Input() data?: any;

  constructor() {
  }

  ngOnInit() {
  }

}
