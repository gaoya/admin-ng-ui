import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NzMessageService, NzModalService} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {routes} from './router/routes';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {HeaderComponent} from './layout/default/header/header.component';
import {FooterComponent} from './layout/default/footer/footer.component';
import {ContentComponent} from './layout/default/content/content.component';
import {SiderComponent} from './layout/default/sider/sider.component';
import {LayoutComponent} from './layout/default/layout/layout.component';
import {TabsComponent} from './layout/default/tabs/tabs.component';
import {CommonService} from './service/common/common.service';
import {WelcomeComponent} from './router/common/welcome/welcome.component';
import {BcbComponent} from './layout/default/bcb/bcb.component';
import {LockComponent} from './router/common/lock/lock.component';
import {Code404Component} from './router/common/code404/code404.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './router/common/login/login.component';
import {NotificationComponent} from './router/common/notification/notification.component';
import {AdminComponent} from './router/admin/admin.component';
import {AdminService} from './service/sys/admin.service';
import {AdminViewComponent} from './router/admin/adminView.component';
import {InputText12Component} from './router/common/input-text-12.component';
import {InputTextArea24Component} from './router/common/input-textarea-24.component';
import {InputDetail12Component} from './router/common/input-detail-12.component';
import {InputRadio12Component} from './router/common/input-radio-12.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SiderComponent,
    TabsComponent,
    LayoutComponent,
    WelcomeComponent,
    BcbComponent,
    LockComponent,
    Code404Component,
    LoginComponent,
    NotificationComponent,
    AdminComponent,
    AdminViewComponent,
    InputText12Component,
    InputTextArea24Component,
    InputDetail12Component,
    InputRadio12Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true, enableTracing: true})
  ],
  providers: [
    CommonService,
    AdminService,
    NzModalService,
    NzMessageService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AdminViewComponent
  ]
})
export class AppModule {
}
