import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  selectIndex = 0;
  menus = [];
  @Output() eventTabs = new EventEmitter();
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.menus.push();
  }

  /***
   * 关闭一个tab操作
   *  思路：
   *    判断tab的index, 若index == selectIndex ，则删除前移一个
   *    若tab的index 和selectIndex 不同，则直接删除
   * @param tab
   */
  closeTab(tab: any): void {
    let selectIndexEqualsIndex = false ;
    let activeTab;
    this.menus.forEach((menu, index ) => {
      if (menu['menuId'] === tab['menuId'] ) {
        if (this.selectIndex === index) {
          selectIndexEqualsIndex = true ;
          this.selectIndex = this.selectIndex - 1 ;
        } else if (this.selectIndex > index) {
          this.selectIndex = this.selectIndex - 1 ;
        }
      }
    });
    this.menus.splice(this.menus.indexOf(tab), 1);
    if (selectIndexEqualsIndex) {
      activeTab = this.menus[this.selectIndex ];
      this.navigateRedirect(activeTab['routerLink']);
      this.eventTabs.emit(activeTab);
    }
  }

  /**
   * 新增一个tab操作
   * @param menu
   */
  newTab(menu): void {
    let activeTabIndex = -1;
    // 判断是否存在
    this.menus.forEach((tab, index) => {
      if (tab['menuId'] === menu['menuId']) {
        activeTabIndex = index;
      }
    });
    if (activeTabIndex < 0) {
      this.menus.push(menu);
      activeTabIndex = this.menus.length - 1;
    }
    this.selectIndex = activeTabIndex;
  }

  /**
   * tabs切换
   *    说明：
   *      若不是欢迎页面：  则使用 menus
   *      若查询不到，则是欢迎页面
   * @param activeTab
   */
  switchTabs(activeTab: any): void {
    this.menus.forEach((tab, index) => {
        if (activeTab['menuId'] === tab['menuId']) {
          this.selectIndex = index;
        }
    });
    this.navigateRedirect(activeTab['routerLink']);
    this.eventTabs.emit(activeTab);
  }

  navigateRedirect(routerUrl) {
    this.router.navigate([routerUrl], { replaceUrl: true });
  }

}
