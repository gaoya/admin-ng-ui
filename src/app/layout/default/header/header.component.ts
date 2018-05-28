import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  @Output() siderShow = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * 切换
   */
  switchCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.siderShow.emit(this.isCollapsed);
  }
}
