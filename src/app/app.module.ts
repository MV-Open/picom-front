import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { FormSigninSignupModule } from './components/form-signin-signup/form-signin-signup.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { AuthenticationPageModule } from './pages/authentication-page/authentication-page.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FormSigninSignupModule,
    HomePageModule,
    AuthenticationPageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
