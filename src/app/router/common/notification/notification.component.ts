import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {CommonService} from '../../../service/common/common.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  loadingMore = false;
  showLoadingMore = true;
  data = [];
  constructor(private http: HttpClient, private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getNotification().subscribe((result: any) => {
      this.data = result.data;
    });
  }
  onLoadMore(): void {

  }


}
