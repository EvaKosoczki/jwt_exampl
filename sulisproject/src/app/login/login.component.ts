import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Logindata } from '../model/logindata';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: Logindata = new Logindata();
  constructor(private userService: UserService, private router: Router, private ar: ActivatedRoute) { }

  ngOnInit() {
  }
  
  onSubmit(ev: Event) {
    ev.preventDefault();

    this.userService.loginUser(this.data).subscribe(
      response => {
        console.log('sikeres');
        this.router.navigateByUrl(`/profile`)
      }, (err) => {
        console.error("Baj van")
        this.router.navigateByUrl(`/`)
      })

  }

}
