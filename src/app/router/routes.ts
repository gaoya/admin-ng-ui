import {Routes } from '@angular/router';
import {WelcomeComponent} from './common/welcome/welcome.component';
import {LockComponent} from './common/lock/lock.component';
import {LayoutComponent} from '../layout/default/layout/layout.component';
import {LoginComponent} from './common/login/login.component';
import {AdminComponent} from './admin/admin.component';

export const routes: Routes = [
  {path: '', component: LoginComponent, outlet: 'app'},
  {path: 'layout', component: LayoutComponent, outlet: 'app', children: [
      {path: 'welcome', component: WelcomeComponent},
      {path: 'admin', component: AdminComponent}
      // {path: '**', redirectTo: 'welcome', pathMatch: 'full', outlet: 'content'}
    ]},
  {path: 'lock', component: LockComponent, outlet: 'app'},
  {path: 'loginout', component: LoginComponent, outlet: 'app'}
];
