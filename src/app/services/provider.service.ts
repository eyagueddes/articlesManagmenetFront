import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders = 'http://127.0.0.1:8084/providers/';

  basicToken:any= sessionStorage.getItem('basicToken');
  constructor(private Http:HttpClient) { }

  listProviders(){
    const headers=new HttpHeaders({ Authorization : this.basicToken});
    console.log(this.Http.get(this.urlProviders));//observable
    return this.Http.get(this.urlProviders,{headers})
   
  }

  deleteProvider(idProvider:any){
    const headers=new HttpHeaders({ Authorization : this.basicToken});
    console.log(this.Http.delete(this.urlProviders+idProvider));
    return this.Http.delete(this.urlProviders+idProvider,{headers});

  }
  updateProvider(obj:any){
    const headers=new HttpHeaders({ Authorization : this.basicToken});
    return this.Http.put(this.urlProviders+obj['id'],obj,{headers});
  }
  addProvider(provider:any){
    const headers=new HttpHeaders({ Authorization : this.basicToken});
    return this.Http.post(this.urlProviders+'add',provider);

  }

  getProvider(id:any) {
    const headers=new HttpHeaders({ Authorization : this.basicToken});
    return this.Http.get(this.urlProviders  + id,{headers})
    }
}

