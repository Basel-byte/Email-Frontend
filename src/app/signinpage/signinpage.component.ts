import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoggerService} from "../logger.service";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.scss']
})
export class SigninpageComponent implements OnInit {


  emailAddress!:string
  password!:string
  account!: any
  dynamicUrl!: string
  isValidUrl = true

  constructor(private router : Router, private logger: LoggerService) {
  }

  ngOnInit(): void {
  }

  setEmailAddress(e : any) {
    this.emailAddress = (e.target as HTMLInputElement).value
    this.dynamicUrl = this.emailAddress
    console.log(this.emailAddress)
    console.log(this.dynamicUrl)
  }

  setPassword(e: any) {
    this.password = (e.target as HTMLInputElement).value
    console.log(this.password)
  }

  checkValidity() {
    return this.emailAddress == undefined || this.password == undefined;
  }

  setAccount() {
    this.account =
      {"emailAddress": this.emailAddress, "password": this.password}

    console.log(this.account)
    console.log(this.dynamicUrl + "---final url")
    this.dynamicUrl = '/home/'+ this.dynamicUrl
    let status: Object = false

    this.logger.logIn(this.account).subscribe(response => {
          console.log(response)
    });
    this.router.navigateByUrl(this.dynamicUrl)

  }

}
