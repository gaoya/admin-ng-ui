import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonService} from '../../../service/common/common.service';
import {DEFAULT_PARENT_MENU, WELCOME_MENU} from '../../../data/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {

  @Input() isCollapsed;
  @Output() eventTabs = new EventEmitter(); // 处罚tabs事件
  menus: any;
  homePage: any; // 首页数据设置
  defaultParentMenu: any ; // 默认首页
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.homePage = WELCOME_MENU;
    this.defaultParentMenu = DEFAULT_PARENT_MENU;
    this.commonService.menuList().subscribe((result: any ) => {
      this.menus = result.menu;
    });
    this.siderClick(this.homePage, this.defaultParentMenu);
    // 跳转
    // this.router.navigate(['/(app:layout/(content:' + this.homePage.routerLink + '))'], { replaceUrl: true });
  }

  /**
   * 此处使用按钮，设置tabs是否显示
   *  此处需要将menu所有的数据传到tabs中
    */
  siderClick(sub, menu) {
    sub['pName'] = menu.menuName;
    sub['pId'] = menu.menuId;
    this.eventTabs.emit(sub);
  }
}
