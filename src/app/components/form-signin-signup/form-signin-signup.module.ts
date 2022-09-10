import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSigninSignupComponent } from './form-signin-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FormSigninSignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FormSigninSignupComponent
  ]
})
export class FormSigninSignupModule { }
