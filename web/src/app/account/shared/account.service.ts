import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

interface IAccount {
  email: string;
  password: string;
}

interface IUser {
  username: string;
  email: string;
  password: string;
}

interface IResponseSignIn {
  user: IResponseSignUp;
  token: string;
}

interface IResponseSignUp {
  id: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async signIn(account: IAccount) {
    const response = await this.http.post<IResponseSignIn>(`${environment.baseUrl}/auth`, account).toPromise();
    if (response && response.token) {
      window.localStorage.setItem('@teamtoken', response.token);
      return true;
    }

    return false;
  }

  async signUp(user: IUser): Promise<IResponseSignUp> {
    const result = await this.http.post<IResponseSignUp | any>(`${environment.baseUrl}/user`, user).toPromise();
    return result;
  }

  logout(): void {
    window.localStorage.removeItem('@teamtoken');
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('@teamtoken');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}
