import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigateByUrl('/register')
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/home')
  }

  isRegistred(){
    return this.auth.isAuthenticate();
  }

}
