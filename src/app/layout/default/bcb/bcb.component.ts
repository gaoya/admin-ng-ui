import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bcb',
  templateUrl: './bcb.component.html',
  styleUrls: ['./bcb.component.css']
})
export class BcbComponent implements OnInit {
  @Input()
  bcb;

  constructor() { }

  ngOnInit() {
  }

}
