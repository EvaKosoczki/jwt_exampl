import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: '',
  component: IndexComponent
},
{
  path: 'register',
  component: RegisterComponent
}, {
  path: 'profile',
  component: ProtectedComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
