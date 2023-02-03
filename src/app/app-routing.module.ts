import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { HomeComponent } from './components/home/home.component';
import { ChangePasswordComponent } from './components/settings/change-password/change-password.component';
import { ProfileComponent } from './components/settings/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: HomeComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'friends', component: FriendsListComponent },
  { path: 'network', component: AllUsersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'change-password', component: ChangePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
