import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly Api_URL = "https://jsonplaceholder.typicode.com/users";

  user: any = [];

  constructor(private http: HttpClient) {
    this.user = []
  }
  getUsers() {
    return this.http.get<any[]>(this.Api_URL);
  }
}
