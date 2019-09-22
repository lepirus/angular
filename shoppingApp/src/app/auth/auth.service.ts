import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;   // ? Optional, mandatory for login, but not for signUp
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  signUp(email: string, password: string) {
    return this.httpClient.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxzs_cvx1Trt6Gdfqvxkb1WyU7tHgbIWs',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(err => {
        let errorMessage = 'An unknown error ocurred!';
        if (!err.error || !err.error.error) {
          return throwError(errorMessage);
        }
        switch (err.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email already exists';
        }
        return throwError(errorMessage);
      })
    );
  }

  login(email: string, password: string) {
    return this.httpClient.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxzs_cvx1Trt6Gdfqvxkb1WyU7tHgbIWs',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }

}
