import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ADMIN_BATCH_DEL_URL, ADMIN_DEL_URL, ADMIN_LIST_URL} from '../url-service-config';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  /**
   * 得到
   */
  getAllUsers() {
    return this.http.get(ADMIN_LIST_URL).pipe();
  }

  /**
   * 批量删除数据
   */
  batchDelUser(ids: string) {
    return this.http.get(ADMIN_BATCH_DEL_URL).pipe();
  }

  /**
   * 删除数据
   * @param {string} id
   * @returns {Observable<Object>}
   */
  delData(id: string) {
    console.log(id);
    return this.http.get(ADMIN_DEL_URL);
  }
}
