import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './layout/init/init.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { AuthGuard } from './account/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: InitComponent
  },
  {
    path: 'app',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'app',
    component: AuthenticationComponent,
    children: [
      { path: 'app', redirectTo: 'signIn', pathMatch: 'full' },
      { path: 'signIn', component: SignInComponent },
      { path: 'signUp', component: SignUpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
