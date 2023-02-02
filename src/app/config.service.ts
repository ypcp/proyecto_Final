import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:HttpClient) { }
  url2='https://jsonplaceholder.typicode.com'
  listUser(){
    return this.http.get(`${this.url2}/users`)
  }
}
