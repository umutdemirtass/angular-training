import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, public router: Router) { }
  username!: string;
  password!: string;
  ngOnInit(): void { }
  login(): void {
    //Token mesaj kismi
    this.authService
      .login(this.username, this.password)
      .subscribe(({ data, message }) => {
        if (data) {
          const token = data.access_token;
          localStorage.setItem('token', token);
          this.router.navigate(['']);
        } else if (message) {
          alert(message);
        }
      });
  }
}
