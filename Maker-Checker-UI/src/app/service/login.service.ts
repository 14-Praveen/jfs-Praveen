import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../model/login.model';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:8087/maker-checker/login';

  // getUsers() {
  //   /* let fakeUsers = [{"id":1,"firstName":"fn","lastName":"ln","email":"e@e.com"},
  //   {"id":2,"firstName":"fn","lastName":"ln","email":"e1@e1.com"}];
  //  return Observable.of(fakeUsers).delay(5000);*/
  //   return this.http.get<User[]>(this.baseUrl);
  // }

  userLogin(username, password) {

    return this.http.get<LoginData>(this.baseUrl + '/' + username + '/' + password);

  }

  // createUser(user: User) {
  //   return this.http.post(this.baseUrl, user);
  // }

  // updateUser(user: User) {
  //   return this.http.put(this.baseUrl + '/' + user.id, user);
  // }

  // deleteUser(id: number) {
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }
}
