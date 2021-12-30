import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

// /addContact/{userEmailAddress}

  addContact(emailAddress : string, newContact : any) {
    const httpHeaders = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post(`http://localhost:8080/emailUser/addContact/${emailAddress}`, newContact, {headers: httpHeaders})
  }

  getContacts(emailAddress : string) {
    return this.http.get(`http://localhost:8080/emailUser/contacts/${emailAddress}`)
  }

  searchContact(emailAddress : string, expression : string) {
    return this.http.post(`http://localhost:8080/emailUser/searchContact/${emailAddress}`, expression)
  }

  deleteContact(emailAddress : string, contactTodelete : any) {
    const httpHeaders = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post(`http://localhost:8080/emailUser/deleteContact/${emailAddress}`, contactTodelete, {headers: httpHeaders})
  }

  editContact(emailAddress : string, editedContact : any) {
    const httpHeaders = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post(`http://localhost:8080/emailUser/editContact/${emailAddress}`, editedContact, {headers: httpHeaders})
  }
}
