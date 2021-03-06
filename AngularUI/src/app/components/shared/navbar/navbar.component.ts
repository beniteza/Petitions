import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // TODO research the consequences of having an injected service as public
  constructor(private router: Router, public service: HomeService) { }

  ngOnInit(): void {
    this.service.isAuthenticated = localStorage.getItem('token') != null;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.service.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

}
