import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticatedUserModel } from '../model/autenticated-user.model';
import { ClientModel } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // on va sauver en mémoire l'état de userState pour la vue suivante
  userState: BehaviorSubject<string> = new BehaviorSubject<string>('');

  URL = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  public connecterClient(authenticatedUser: AuthenticatedUserModel): Observable<AuthenticatedUserModel> {
    return this.http.post<AuthenticatedUserModel>(this.URL + '/login', authenticatedUser, this.httpOptions);
  }

  public addClient(client: ClientModel): Observable<ClientModel> {
    return this.http.post<ClientModel>(this.URL + '/clientDto', client, this.httpOptions);
  }
}
