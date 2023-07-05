import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders = 'http://127.0.0.1:8084/providers/';


  constructor(private Http:HttpClient) { }

  listProviders(){
    console.log(this.Http.get(this.urlProviders));
    return this.Http.get(this.urlProviders)
   
  }

  deleteProvider(idProvider:any){
    console.log(this.Http.delete(this.urlProviders+idProvider));
    return this.Http.delete(this.urlProviders+idProvider);

  }
  updateProvider(obj:any){
    return this.Http.put(this.urlProviders+obj['id'],obj);
  }
  addProvider(provider:any){
    return this.Http.post(this.urlProviders+'add',provider);

  }

  getProvider(id:any) {
    return this.Http.get(this.urlProviders  + id)
    }
}

