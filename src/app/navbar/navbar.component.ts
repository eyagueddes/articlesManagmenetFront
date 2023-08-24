import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  nom : any = sessionStorage.getItem("nom");
  prenom : any = sessionStorage.getItem("prenom");
  @Input() fils: any;
  @Output() eventToSend = new EventEmitter();
  constructor(public loginService: AuthenticationService) {
    console.log("constructor");
  }

  ngOnChanges() {
    console.log("valeur modifée est :" + this.fils);
  }
  ngOnInit() {
    console.log("On init");
  }

  sendEvent() {
    this.eventToSend.emit("Message du fils vers le pere");
  }

}