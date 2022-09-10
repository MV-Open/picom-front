import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Const } from 'src/app/utils/const';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  userState: string = '';

  constructor(private _route: Router, private _authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  signUp(): void {
    this.userState = Const.SIGNUP;
    // récupère la valeur courante du userState
    // le next prépare l'envoi au composant suivant
    this._authenticationService.userState.next(this.userState);
    console.log(this.userState);
    this._route.navigate(['/authentication']);
    console.log(this.userState);
  }

  signIn(): void{
    this.userState = Const.SIGNIN;
    this._authenticationService.userState.next(this.userState);
    console.log(this.userState);
    this._route.navigate(['/authentication']);
  }
}
