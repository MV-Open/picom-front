import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationPageComponent } from './authentication-page.component';
import { FormSigninSignupModule } from 'src/app/components/form-signin-signup/form-signin-signup.module';



@NgModule({
  declarations: [
    AuthenticationPageComponent,
  ],
  imports: [
    CommonModule,
    FormSigninSignupModule
  ],
  exports: [
    AuthenticationPageComponent
  ]
})
export class AuthenticationPageModule { }
