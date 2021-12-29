import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private http : HttpClient) {
  }

  signUp(user : any){
    return this.http.post("http://localhost:8080/emailLogger/signUp", user)
  }

  logIn(user: any){
    return this.http.post("http://localhost:8080/emailLogger/logIn", user);
  }

}
