import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent {


  constructor(private service:ProviderService,private router:Router){}
  addProvider(provider:any){
  
    this.service.addProvider(provider).subscribe(data=>{
  
      this.router.navigate(['listProvider']);
    });

  }

}
