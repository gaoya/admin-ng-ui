import {Component, OnInit} from '@angular/core';
import {AdminViewComponent} from './adminView.component';
import {CommonTable} from '../../data/common-table';
import {ADMIN_BATCH_DEL_URL, ADMIN_DEL_URL, ADMIN_LIST_URL} from '../../service/url-service-config';
import {TableSet} from '../../service/common/table-set';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [
  ]
})
export class AdminComponent implements OnInit {
  tableSet: TableSet;

  constructor(private commonTable: CommonTable) {
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
    this.commonTable.delData(data.id, this.tableSet);
  }

  /**
   * 批量删除数据
   */
  batchDelData() {
    let ids;
    this.tableSet.displayData.forEach((data) => {
      if (data != null && data['checked'] === true) {
        ids += data.id + ',';
      }
    });
    this.commonTable.batchDelData(ids, this.tableSet);
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
    this.tableSet.displayData = $event;
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
    this.commonTable.refreshStatus(this.tableSet);
  }

  /**
   * 选择所有数据
   * @param {boolean} value
   */
  checkAll(value: boolean): void {
    this.tableSet.displayData.forEach(data => {
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
    this.commonTable.COMMON_LIST_URL = ADMIN_LIST_URL;
    this.commonTable.COMMON_DEL_URL = ADMIN_DEL_URL;
    this.commonTable.COMMON_BATCH_DEL_URL = ADMIN_BATCH_DEL_URL;
    this.commonTable.COMMON_INSERT_URL = 'INSERT';
    this.commonTable.COMMON_UPDATE_URL = 'UPDATE';
    this.tableSet = new TableSet();
    this.adminList();
  }

  /**
   * 得到table中的数据
   */
  adminList(reset: boolean = false ) {
    this.commonTable.adminList(reset, this.tableSet);
  }
}
