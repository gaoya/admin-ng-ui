import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TableSet} from '../service/common/table-set';

@Injectable()
export class CommonTable {
  // 通用的url地址
  COMMON_LIST_URL: string;      // list
  COMMON_DEL_URL: string;       // del
  COMMON_BATCH_DEL_URL: string; // batch del
  COMMON_INSERT_URL: string;    // insert
  COMMON_UPDATE_URL: string;    // update
  // 通用的url地址
  OK = {
    label: '确定',
    onClick: (componentInstance) => {
      componentInstance.submitForm();
    }
  };

  CLOSE = {
    label: '关闭',
    onClick: () => {
      this.modalService.closeAll();
    }
  };

  constructor(private http: HttpClient, private message: NzMessageService, private modalService: NzModalService) {
  }

  /**
   * 信息提示
   * @param type
   * @param msg
   */
  msgPrompt(type, msg) {
    this.message.create(type, msg);
  }
  /**
   * 打开组件
   * @param title 标题
   * @param type  类型 - 类型在引用页面会使用到，可以根据引用显示页面内容的，所有在使用过程中，必须存在
   * @param data  数据 - 传入到引用页面的数据内容
   * @param btns  Footer 中按钮组 ，此处根据类型设置显示的按钮，在detail类型中是需要确定按钮的，所有会被去掉，在new和update中是需要确定的，所有会被保留
   * @param component 引用的组件
   */
  showModal(title, type, data: any = {}, btns: any, component: any
  ) {
    this.modalService.create({
      nzTitle: title,
      nzWidth: '85%',
      nzContent: component,
      nzComponentParams: {
        type: type,
        data: data
      },
      nzFooter: btns
    });
  }

  /**
   * 此处是测试方法，不一定可以使用
   * 得到table中的数据
   */
  adminList(reset: boolean = false, tableSet: TableSet = new TableSet() ) {
    if (reset) {
      tableSet.pageIndex = 1;
    }
    tableSet.loading = true;
    this.http.get(this.COMMON_LIST_URL).subscribe((result: any) => {
      tableSet.loading = false;
      // this.pageIndex = result.current;
      // this.pageSize = result.size;
      tableSet.dataSet = result.data;
      tableSet.dataSet.forEach((data) => {
        data['checked'] = false;
        data['expand'] = false;
      });
    });
  }

  /**
   * 刷新状态
   */
  refreshStatus(tableSet: TableSet = new TableSet()): void {
    console.log('refreshStatus');
    const allChecked = tableSet.displayData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = tableSet.displayData.filter(value => !value.disabled).every(value => !value.checked);
    tableSet.allChecked = allChecked;
    tableSet.indeterminate = (!allChecked) && (!allUnChecked);
  }

  /**
   * 删除数据
   * @param id 需要删除的编号
   * @param {TableSet} tableSet
   */
  delData(id, tableSet: TableSet = new TableSet()) {
    this.http.get(this.COMMON_DEL_URL + id).subscribe((result: any) => {
      if (result.code === '1') {
        this.msgPrompt('success', '删除数据成功！');
        this.adminList(true, tableSet);
        this.refreshStatus(tableSet);
      } else {
        this.msgPrompt('error', '删除失败！');
      }
    });
  }

  /**
   * 批量删除数据
   */
  batchDelData(ids, tableSet: TableSet = new TableSet()) {
    if (ids !== undefined && ids.length > 0) {
      this.http.post(this.COMMON_BATCH_DEL_URL, null, { params: {
          ids: ids
        }}).subscribe((result: any) => {
          if (result.code === '1') {
            this.msgPrompt('success', '成功删除了' + result.count + '条数据!');
            this.adminList(true, tableSet);
            this.refreshStatus(tableSet);
          } else {
            this.msgPrompt('error', '删除失败！');
          }
      });
    } else {
      this.msgPrompt('error', '请选择需要删除的数据');
    }
  }
}


