import { Component,OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {
  providers:any;
  constructor(private service:ProviderService,private router: Router){}

ngOnInit(): void {
  this.service.listProviders().subscribe(data=>this.providers=data);
}
deleteProvider(providerId:any){
  this.service.deleteProvider(providerId).subscribe(response=>{this.refreshListProviders();
    console.log(response);
  }
  );
}
refreshListProviders(){
  this.service.listProviders().subscribe(
    response => {
    this.providers = response;
    }
    );
}
updateProvider(providerId:any){
  this.router.navigate(['updateProvider'+'/'+providerId])
}

}
