import { Component, OnInit } from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss']
})
export class SignuppageComponent implements OnInit {


  name!:string
  emailAddress!:string
  password!:string
  newUser!:any

  constructor(private loggerService : LoggerService) { }

  ngOnInit(): void {
  }

  setName(e : any) {
    this.name = (e.target as HTMLInputElement).value
    console.log(this.name)
  }

  setEmailAddress(e : any) {
    this.emailAddress = (e.target as HTMLInputElement).value
    console.log(this.emailAddress)
  }

  setPassword(e: any) {
    this.password = (e.target as HTMLInputElement).value
    console.log(this.password)
  }

  setNewUser() {
    this.newUser = {
      "name": this.name,
      "emailAddress": this.emailAddress,
      "password": this.password,
      "loggedIn": false
    }
    console.log(this.newUser)
    this.loggerService.signUp(this.newUser).subscribe(check => {console.log("Sign Up" + !check)})
    ////////////////use check flag to navigate if true//////////////
  }

}
