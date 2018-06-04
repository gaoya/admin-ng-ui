import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LOCK_URL, LOGIN_URL, MENUS_URL, NOTIFICATION_URL} from '../url-service-config';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) {
  }

  /**
   * 得到菜单列表
   * @returns {Observable<Object>}
   */
  menuList() {
    return this.http
      .get(MENUS_URL)
      .pipe();
  }

  /**
   * 得到用户信息
   * @param user
   * @param pwd
   * @returns {Observable<Object>}
   */
  getUser(user: any, pwd: any) {
    // return this.http.post('mock-data/login.json', {}, {
    //   params: new HttpParams().set('user', user).set('pwd', pwd)
    // });
    return this.http.get(LOGIN_URL).pipe();
  }

  /**
   * 解锁
   * @param pwd
   * @returns {Observable<Object>}
   */
  unLock(pwd: any) {
    return this.http.get(LOCK_URL).pipe();
  }

  /**
   * 信息推送
   * @returns {Observable<Object>}
   */
  getNotification() {
    return this.http.get(NOTIFICATION_URL).pipe();
  }


}
