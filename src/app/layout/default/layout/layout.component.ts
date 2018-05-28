
import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TabsComponent} from '../tabs/tabs.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;  // 左边菜单栏是否显示
  triggerTemplate = null;
  bcb = [];   // 面包屑设置
  tab;  // 切换设置
  // 通过该方法进行注入组件操作
  @ViewChild('tabsComponent')
  tabsComponent: TabsComponent;

  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  constructor() { }

  ngOnInit() {
  }

  // /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  showCollapsedSider($event) {
    this.isCollapsed = $event;
  }

  /**
   * 设置tabs
   * @param $event
   */
  setTabs($event) {
    this.tab = $event;
    this.tabsComponent.newTab($event);
    this.setbcb(this.tab);
  }

  setbcb($event) {
    let pName = $event.pName;
    this.bcb = [];
    if (pName !== undefined && pName !== '') {
      this.bcb.push(pName);
    }
    this.bcb.push($event.menuName);
  }
}
