import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  constructor(private http: HttpClient) { }

  sendMessage(message: any){
    const httpHeaders = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post("http://localhost:8080/emailMessage/send", message, {headers: httpHeaders})
  }

  getMessagesFile(fileName: string, emailAddress : string) {
    const httpHeaders = new HttpHeaders({'content-type': 'text'});
    return this.http.post(`http://localhost:8080/emailMessage/getFile/${emailAddress}`, fileName)
  }

  noFilterSearch(expression: string, emailAddress : string){
    return this.http.post(`http://localhost:8080/emailMessage/noFilterSearch/${emailAddress}`, expression)
  }

  starMessage(id : string[], emailAddress :string) {
    return this.http.post(`http://localhost:8080/emailMessage/starMessage/${emailAddress}`, id)
  }

  importantMessage(id : string[], emailAddress : string) {
    return this.http.post(`http://localhost:8080/emailMessage/importantMessage/${emailAddress}`, id)
  }

  sendDraft(message : any, emailAddress : string) {
    return this.http.post(`http://localhost:8080/emailMessage/draftMessage/${emailAddress}`, message)
  }

  sendTrash(id : string[], emailAddress : string) {
    return this.http.post(`http://localhost:8080/emailMessage/deleteMessage/${emailAddress}`, id)
  }

  sendRead(id : string[], emailAddress : string) {
    return this.http.post(`http://localhost:8080/emailMessage/readMessage/${emailAddress}`, id)
  }

  filterSearch(message : any, emailAddress : string) {
    return this.http.post(`http://localhost:8080/emailMessage/filterSearch/${emailAddress}`, message)
  }


}
