import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username: any, password: any) {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    const basicToken = 'Basic ' + btoa(username + ':' + password);
    sessionStorage.setItem('basicToken', basicToken);
    //return this.httpClient.get('http://127.0.0.1:8080/auth/basicauth', { headers }).pipe
    return this.httpClient.get('http://127.0.0.1:8084/auth/basicauth',{ headers }).pipe
      (
        map(
          (userData:any) => {
            console.log(userData);
            let basicToken = 'Basic ' + btoa(username + ':' + password);
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('prenom', userData["name"]);
            sessionStorage.setItem('nom', userData["lastName"]);
           sessionStorage.setItem('basicToken', basicToken);
            //console.log(username + " " + password);
         
            return userData;
          }
        )
      );


    // Step 2 : charger credentials du backend
    /*if (username === "amine" && password === "1234") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }*/
  }

  isUserLoggedIn() {
    // retourne true si l'user est connecté sinon false
    let basicToken = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return (!(basicToken === null))
  }
  logOut() {
    sessionStorage.removeItem('username')
  }
}