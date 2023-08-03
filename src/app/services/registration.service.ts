import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService{
  user:any;
  constructor(private Http:HttpClient){}

  createUser(myform:any){
    this.user={
      
      'email': myform.value.email,
      'password':myform.value.password,
      'name': myform.value.name,
      'lastName':myform.value.lastName,
      'temp':myform.value.role
    }
    console.log('user',this.user)
    
    return this.Http.post("http://localhost:8084/registration", this.user);
    
  }

  
}
