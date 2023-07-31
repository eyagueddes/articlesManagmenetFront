import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  invalidLogin?:boolean;
  successMessage = 'Authentication success';
  errorMessage = 'Invalide username or password';
  constructor(
    private router: Router,
    private loginservice: AuthenticationService
  ) {}
  ngOnInit() {
    this.invalidLogin=false;
  }
  checkLogin() {
    this.loginservice.authenticate(this.username, this.password).subscribe(
      next=> {
        this.router.navigate(['/listProvider']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
      }
    );
  }
  //   if (this.loginservice.authenticate(this.username, this.password)) {
  //     this.router.navigate([''])
  //     } else
  //     this.invalidLogin = true

  // }
}
