import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../service/sys/admin.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {AdminViewComponent} from './adminView.component';
import {CommonTable} from '../../data/common-table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [
    NzMessageService,
    NzModalService
  ]
})
export class AdminComponent implements OnInit {
  dataSet = [];
  // 是否显示边框
  bordered = true;
  loading = false;
  pagination = true;
  header = true;
  // 是否显示tab的标题
  title = false;
  // 是否显示tab的底部
  footer = false;
  fixHeader = true;
  size = 'small';
  expandable = true;
  checkbox = true;
  allChecked = false;
  indeterminate = false;
  noResult = '没有数据';
  displayData = [];
  total = 1;
  pageIndex = 1;
  pageSize = 10;

  constructor(private adminService: AdminService,
              private modalService: NzModalService,
              private commonTable: CommonTable) {
  }

  /***
   *  打开组件
   */
  showModal(title, type, data: any = {}) {
    let btns = [];
    if (type !== 'detail') {
      btns = [this.commonTable.OK, this.commonTable.CLOSE];
    } else {
      btns = [this.commonTable.CLOSE];
    }
    this.commonTable.showModal(title, type, data, btns, AdminViewComponent);

  }

  /**
   * 删除数据
   */
  delData(data: any) {
    this.adminService.delData(data.id).subscribe((result: any) => {
      if (result.code === '1') {
        this.commonTable.msgPrompt('success', '删除数据成功！');
        this.adminList(true);
        this.refreshStatus();
      } else {
        this.commonTable.msgPrompt('error', '删除失败！');
      }
    });
  }

  /**
   * 批量删除数据
   */
  batchDelData() {
    let ids;
    this.displayData.forEach((data) => {
      if (data != null && data['checked'] === true) {
        ids += data.id + ',';
      }
    });
    if (ids !== undefined && ids.length > 0) {
      this.adminService.batchDelUser(ids).subscribe((result: any) => {
        if (result.code === '1') {
          this.commonTable.msgPrompt('success', '成功删除了' + result.count + '条数据!');
          this.adminList(true);
          this.refreshStatus();
        } else {
          this.commonTable.msgPrompt('error', '删除失败！');
        }
      });
    } else {
      this.commonTable.msgPrompt('error', '请选择需要删除的数据');
    }
  }

  /**
   * 当前数据改变是触发
   * @param {Array<{name: string; age: number; address: string; checked: boolean; expand: boolean; description: string}>} $event
   */
  currentPageDataChange($event: Array<{
    name: string;
    age: number;
    address: string;
    checked: boolean;
    expand: boolean;
    description: string;
  }>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  /**
   * 查询
   */
  searchData(reset: boolean = false): void {
    this.refreshStatus();
    this.adminList(reset);
  }

  /**
   * 刷新状态
   */
  refreshStatus(): void {
    console.log('refreshStatus');
    const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  /**
   * 选择所有数据
   * @param {boolean} value
   */
  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  /***
   * 初始化数据操作
   */
  ngOnInit(): void {
    this.adminList();
  }

  /**
   * 得到table中的数据
   */
  adminList(reset: boolean = false) {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.adminService.getAllUsers().subscribe((result: any) => {
      this.loading = false;
      // this.pageIndex = result.current;
      // this.pageSize = result.size;
      this.dataSet = result.data;
      this.dataSet.forEach((data) => {
        data['checked'] = false;
        data['expand'] = false;
      });
    });
  }
}
