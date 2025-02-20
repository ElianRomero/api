import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly Api_URL = 
  "https://cab8c7288fd552363d16.free.beeceptor.com/api/users";

  users: User[];

  constructor(private http: HttpClient) {
    this.users = []
  }
  getUsers() {
    return this.http.get<User[]>(this.Api_URL);
  }

  getUser(id: number) {
    return this.http.get<User>(`${this.Api_URL}/${id}`);
  }
  postUser (user: User){
    return this.http.post<User>(this.Api_URL, user)
  }
}
