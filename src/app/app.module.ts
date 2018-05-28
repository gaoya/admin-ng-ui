import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import {routes} from './router/routes';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HeaderComponent } from './layout/default/header/header.component';
import { FooterComponent } from './layout/default/footer/footer.component';
import { ContentComponent } from './layout/default/content/content.component';
import { SiderComponent } from './layout/default/sider/sider.component';
import { LayoutComponent } from './layout/default/layout/layout.component';
import { TabsComponent } from './layout/default/tabs/tabs.component';
import {CommonService} from './service/common/common.service';
import { WelcomeComponent } from './router/common/welcome/welcome.component';
import { BcbComponent } from './layout/default/bcb/bcb.component';
import { LockComponent } from './router/common/lock/lock.component';
import { Code404Component } from './router/common/code404/code404.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './router/common/login/login.component';
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
    CommonService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
