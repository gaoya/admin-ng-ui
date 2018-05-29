import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../service/sys/admin.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {AdminViewComponent} from './adminView.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
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

  constructor(private adminService: AdminService, private message: NzMessageService, private modalService: NzModalService) {
  }

  /***
   *  打开组件
   */
  showModal(title, type) {
    const modal = this.modalService.create({
      nzTitle: title,
      nzWidth: '85%',
      nzContent: AdminViewComponent,
      nzComponentParams: {
        type: type,
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzFooter: [
        {
          label: '确定',
          onClick: (componentInstance) => {
            console.log(componentInstance.validateForm.controls[ 'sex' ].value);
            componentInstance.submitForm();
            // componentInstance.title = 'title in inner component is changed';
          }
        },
        {
          label: '关闭',
          onClick: () => {
            this.modalService.closeAll();
          }
        }]
    });

    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    // Return a result when closed
    modal.afterClose.subscribe((result) => {
      console.log('[afterClose] The result is:', result);
    });

    // delay until modal instance created
    window.setTimeout(() => {
      const instance = modal.getContentComponent();
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }

  /**
   * 删除数据
   */
  delData(data: any) {
    this.adminService.delData(data.id).subscribe((result: any) => {
      if (result.code === '1') {
        this.message.create('success', '删除数据成功！');
        this.adminList(true);
        this.refreshStatus();
      } else {
        this.message.create('error', '删除失败！');
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
          this.message.create('success', '成功删除了' + result.count + '条数据!');
          this.adminList(true);
          this.refreshStatus();
        } else {
          this.message.create('error', '删除失败！');
        }
      });
    } else {
      this.message.create('error', '请选择需要删除的数据');
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
