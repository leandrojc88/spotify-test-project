import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const ACCESS_TOKEN = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  constructor() { }

  login(token: string): void {
    window.sessionStorage.removeItem(ACCESS_TOKEN)
    window.sessionStorage.setItem(ACCESS_TOKEN, token)
  }

  logout(): void {
    window.sessionStorage.removeItem(ACCESS_TOKEN)
  }

  isLoggedIn(): boolean {
    const item = window.sessionStorage.getItem(ACCESS_TOKEN);
    return Boolean(item);
  }

  getToken(): string {
    const item = window.sessionStorage.getItem(ACCESS_TOKEN);
    if (!item) return "";
    return item;
  }

  getHeaders(addAuthorization = false): HttpHeaders {
    let requestOptions = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (addAuthorization) {
      requestOptions = requestOptions.append('Authorization', `Bearer ${this.getToken()}`);
    }

    return requestOptions;
  }

}
