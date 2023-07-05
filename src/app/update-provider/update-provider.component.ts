import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit{

   id:any;
   providerToUpdate:any;
   name:any;
   email:any;
   address:any;
  constructor(private service: ProviderService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params=>{
    this.id=params.get('id');
  });

  this.providerToUpdate= this.service.getProvider(this.id).subscribe((provider:any)=>{
    this.name=provider.name;
    this.email=provider.email;
    this.address=provider.address;

  })

  
  }
  updateProvider(){
    let providerToUpdate={
      'name':this.name,
      'email': this.email,
      'address': this.address,
      'id': this.id
    }
    this.service.updateProvider(providerToUpdate).subscribe(data=>this.router.navigate(['listProvider']))

  }

}
