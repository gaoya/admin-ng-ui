import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TableSet} from '../service/common/table-set';

@Injectable()
export class CommonTable {
  tableSet: TableSet;
  constructor(private http: HttpClient, private message: NzMessageService, private modalService: NzModalService) {
    this.tableSet = new TableSet();
  }

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
}


