import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}
  //implement basic authentication
  authenticate(username: any, password: any) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),//codage
    });
    return this.httpClient
      .get('http://localhost:86/basicauth', { headers })
      .pipe(
        map((userData) => {
          let basicToken= 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('basicToken', basicToken);
          console.log(userData);
          return userData;
        })
      );
  }

  // if (username === "eya" && password === "1234") {
  // sessionStorage.setItem('username', username)
  // return true;
  // } else {
  // return false;
  // }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    // console.log(!(user === null))
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('username');
  }
}
