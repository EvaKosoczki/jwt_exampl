import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Logindata } from '../model/logindata';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:3000/api"
  constructor(protected http: HttpClient) { }

  addUser(user): Observable<User> {
    return this.http.post<User>(`${this.url}/new`, user)
  }

  loginUser(user): Observable<Logindata> {
    return this.http.post<Logindata>(`${this.url}/login`, user)
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
