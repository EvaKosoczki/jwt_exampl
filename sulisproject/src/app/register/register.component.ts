import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  data: User = new User()
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(ev: Event) {
    ev.preventDefault();
    this.userService.addUser(this.data).subscribe(
      response => {
        console.log('sikeres');

      },
      err =>
        console.error(err),
    )
  }

}


