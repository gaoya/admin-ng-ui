import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {retry} from 'rxjs/operator/retry';

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
      .get('mock-data/menu.json')
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
    return this.http.get('mock-data/login.json').pipe();
  }


}
