import { Component, OnInit } from '@angular/core';
import {ContactsService} from "./contacts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  newContact = {"name": '', "emailAddress": '',"id": ''}
  existingContact = {"name": '', "emailAddress": ''}
  indexEdited!: number
  contacts: any
  paramQuery: any

  constructor(private contactsService : ContactsService, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      this.paramQuery = data
      console.log(this.paramQuery)
    });
  }

  ngOnInit(): void {
    this.getContactsFromBackend()
  }


  closeNewContactModal() {
    let modal = document.getElementById("newContactModal")
    modal!.style.display = 'none'
  }

  closeEditContactModal() {
    let modal = document.getElementById("editContactModal")
    modal!.style.display = 'none'
  }

  openNewContactModal() {
    let modal = document.getElementById("newContactModal")
    modal!.style.display = 'block'
  }

  openEditContactModal(index : any) {
    let modal = document.getElementById("editContactModal")
    modal!.style.display = 'block'
    this.indexEdited = index
    this.existingContact.emailAddress = this.contacts[index].emailAddress
  }

  setNewName(e : any) {
      this.newContact.name = (e.target as HTMLInputElement).value
  }

  setNewEmail(e : any) {
      this.newContact.emailAddress = (e.target as HTMLInputElement).value
  }

  submitNewContact() {
    let modal = document.getElementById("newContactModal")
    modal!.style.display = 'none'
    this.contactsService.addContact(this.paramQuery.id, this.newContact).subscribe(data => {
      console.log("addContact Success")
      this.getContactsFromBackend()
    })
  }

  getContactsFromBackend() {
    this.contactsService.getContacts(this.paramQuery.id).subscribe(data => {
      this.contacts = data
      console.log("getContacts Success")
    })
  }

  setEditName(e : any) {
    this.existingContact.name = (e.target as HTMLInputElement).value
  }

  saveChanges() {
      // this.contacts[this.indexEdited] = this.existingContact
      let modal = document.getElementById("editContactModal")
      modal!.style.display = 'none'
      this.contactsService.editContact(this.paramQuery.id, this.existingContact).subscribe(data => {
        console.log("Edit success")
        this.getContactsFromBackend()
      })
  }

  deleteContact(index : any) {
    this.contactsService.deleteContact(this.paramQuery.id, this.contacts[index]).subscribe(data => {
      console.log("Delete Success")
      alert("Contact Deleted Successfully")
      this.getContactsFromBackend()
    })
  }

  searchContact(e : any) {
    let inputSearch = (e.target as HTMLInputElement).value
    console.log(inputSearch)
    this.contactsService.searchContact(this.paramQuery.id, inputSearch).subscribe(data => {
      this.contacts = data
    })

  }
}
