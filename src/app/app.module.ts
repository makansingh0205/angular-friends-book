import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HomeComponent } from './components/home/home.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { ProfileComponent } from './components/settings/profile/profile.component';
import { ChangePasswordComponent } from './components/settings/change-password/change-password.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { NetworkComponent } from './components/network/network.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    HomeComponent,
    FriendsListComponent,
    NetworkComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ProfileCardComponent,
    NetworkComponent,
    UserListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
