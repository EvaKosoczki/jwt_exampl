import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {
  data: any
  isLoggedIn: boolean = false
  err: any

  constructor(private userService: UserService, private router: Router) {
    this.userService.getData().subscribe(
      data => {
        this.data = data[0]
        this.isLoggedIn = true
        console.log('Adat: ' + this.data)
      },
      err => {
        console.error(err)
        this.err = err
      }

    )
  }

  ngOnInit() {
  }


}
