import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { Logindata } from '../model/logindata';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  fakeData: Logindata = new Logindata()
  toggle: boolean = false
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    console.log('Kiléptél?')
    this.userService.loginUser(this.fakeData).subscribe(
      response => {
        console.log('sikeres');
        this.router.navigateByUrl(`/profile`)
      }, (err) => {
        console.log("Sikeres kilépés")
        this.toggle != this.toggle
        this.router.navigateByUrl(`/`)
      })
  }

}
