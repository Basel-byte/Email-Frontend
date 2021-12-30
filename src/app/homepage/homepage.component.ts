import {Component, OnInit} from '@angular/core';
import {UUID} from 'uuid-generator-ts';
import {ActivatedRoute, Router} from "@angular/router";
import {HomepageService} from "./homepage.service";
import {LoggerService} from "../logger.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  paramQuery: any

  constructor(private activatedRoute: ActivatedRoute, private homepageService : HomepageService
              ,private loggerService: LoggerService, private router : Router) {
      this.activatedRoute.params.subscribe(data => {
        this.paramQuery = data
        console.log(this.paramQuery)
      });

  }

  ngOnInit(): void {
    this.getMessagesFromBackend('Inbox')
  }


  pageNo = 0
  prevDisabled = true
  nextDisabled = false
  messageOrder = 0
  inboxSize = 0
  searchInput!: string
  starredStates = new Array<boolean>(2000).fill(false)
  checkedStates = new Array<boolean>(2000).fill(false)
  tabsActivity = [true, false]
  newMessage!: any
  to = new Array<string>(1)
  subject!: string
  body!: string
  allMessages : any;
  messages : any[] = []
  read!:boolean
  dynamicUrl!: string
  filterStr = new Array<string>(5).fill('')

  // messages = this.allMessages.slice(0, 4)



  getMessagesFromBackend(fileName : string) {
    this.pageNo = 0
    this.prevDisabled = true
    this.nextDisabled = false
    this.messageOrder = 0
    this.homepageService.getMessagesFile(fileName, this.paramQuery.id).subscribe(data => {
      this.allMessages = data;
    if (fileName == 'Inbox')
      this.inboxSize = this.allMessages.length
    console.log(this.allMessages)})
  }

  showMessages() {
      let index = 4 * this.pageNo
      this.messages = this.allMessages.slice(index, index + 4)
      let page = document.getElementById("ex1-content")
      page!.style.display = 'block'
  }

  openMessageClicked(index : number) {
    this.messageOrder = index
    let message = document.getElementById("messageClicked")
    message!.style.display = 'block'
  }

  closeMessageClicked() {
    let message = document.getElementById("messageClicked")
    message!.style.display = 'none'
  }

  showNextPage() {
      this.pageNo++;
      if (this.pageNo == Math.floor(this.allMessages.length/ 4))
        this.nextDisabled = true
      console.log(this.pageNo)
      this.showMessages()
      if (this.pageNo > 0)
        this.prevDisabled = false
  }

  showPrevPage() {
    this.pageNo--;
    if (this.pageNo == 0)
      this.prevDisabled = true
    else
      this.prevDisabled = false
    this.showMessages()
    if (this.pageNo <= Math.floor(this.allMessages.length/ 4))
      this.nextDisabled = false
  }

  toggleProfileMenu() {
    let menu = document.getElementById("profileMenu")
    if (menu!.style.display == 'none')
      menu!.style.display = 'block'
    else
      menu!.style.display = 'none'
  }

  toggleFilterMenu() {
    let menu = document.getElementById("filterMenu")
    if (menu!.style.display == 'none')
      menu!.style.display = 'block'
    else
      menu!.style.display = 'none'
  }

  toggleStar(starId : string) {
    let index = Number(starId[4]) + 4 * this.pageNo
    this.starredStates[index] = !this.starredStates[index]
    let starIdArr = new Array<string>(1)
    console.log(this.allMessages[index])
    starIdArr[0] = this.allMessages[index].iD
    this.homepageService.starMessage(starIdArr, this.paramQuery.id).subscribe(data => {
      console.log("star success")
    })
    // console.log(this.starredStates[index] + "-----starred"+index)
  }

  sendImportant() {
    let importantIdArr = new Array<string>()
    for (let i = 0; i < this.allMessages.length; i++) {
      if (this.checkedStates[i]) {
        importantIdArr.push(this.allMessages[i].iD)
      }
    }
    this.homepageService.importantMessage(importantIdArr, this.paramQuery.id).subscribe( data => {
      console.log("Important success")
    })
  }

  sendDraft() {
    this.newMessage =
      {"iD": new UUID().toString(),
        "from": this.paramQuery.id,
        "to": this.to,
        "subject": this.subject,
        "body": this.body,
        "date": new Date().toString(),
        "draft": true,
        "attachment" : ""
      }
    let modal = document.getElementById("newMessageModal")
    modal!.style.display = 'none'
    this.homepageService.sendDraft(this.newMessage, this.paramQuery.id).subscribe(data => {
      console.log("Draft saved")
      alert("Draft Saved")
    })
  }

  sendTrash() {
    let trashIdArr = new Array<string>()
    for (let i = 0; i < this.allMessages.length; i++) {
      if (this.checkedStates[i]) {
        trashIdArr.push(this.allMessages[i].iD)
      }
    }
    this.homepageService.sendTrash(trashIdArr, this.paramQuery.id).subscribe( data => {
      console.log("Trash success")
      alert("Message sent to trash!")
    })

    this.getMessagesFromBackend("Inbox")
    this.showMessages()
  }

  markAsRead(index : any) {
    let realIndex = index + 4 * this.pageNo
    let ReadIdArr = new Array<string>()
    for (let i = 0; i < this.allMessages.length; i++) {
      if (this.checkedStates[i]) {
        ReadIdArr.push(this.allMessages[i].iD)
      }
    }
    this.homepageService.sendRead(ReadIdArr, this.paramQuery.id).subscribe( data => {
      console.log("Read success")
    })
    this.getMessagesFromBackend("Inbox")
    this.showMessages()
  }

  openNewMessageModal() {
    let modal = document.getElementById("newMessageModal")
    modal!.style.display = 'block'
  }

  closeNewMessageModal() {
    let modal = document.getElementById("newMessageModal")
    modal!.style.display = 'none'
  }


  changeActivity() {
    this.tabsActivity[0] = !this.tabsActivity[0]
    this.tabsActivity[1] = !this.tabsActivity[1]
  }


  setTo(e : any) {
    /////make temp string to take input //to// as comma seperated and then parse them in to array of strings
    this.to[0] = (e.target as HTMLInputElement).value
    console.log("to : " + this.to)
  }

  setSubject(e : any) {
    this.subject = (e.target as HTMLInputElement).value
    console.log("subject : " + this.subject)
  }

  setBody(e : any) {
    this.body = (e.target as HTMLInputElement).value
    console.log("body : " + this.body)
  }

  setNewMessage() {
    this.newMessage =
      {"iD": new UUID().toString(),
      "from": this.paramQuery.id,
      "to": this.to,
      "subject": this.subject,
      "body": this.body,
      "date": new Date().toString(),
      "attachment" : ""
      }
    console.log(this.newMessage.date)
    let modal = document.getElementById("newMessageModal")
    modal!.style.display = 'none'
    this.homepageService.sendMessage(this.newMessage).subscribe(() => {console.log("Message Sent");})
  }

  defaultSearch(e : any) {
    this.searchInput = (e.target as HTMLInputElement).value
    this.homepageService.noFilterSearch(this.searchInput, this.paramQuery.id).subscribe(
      data => {
        this.pageNo = 0
        this.prevDisabled = true
        this.nextDisabled = false
        this.messageOrder = 0
        this.allMessages = data
        this.showMessages()
      }
    )
  }

  filterByFrom(e : any) {
    this.filterStr[0] = (e.target as HTMLInputElement).value
  }

  filterByTo(e : any) {
    this.filterStr[1] = (e.target as HTMLInputElement).value
  }

  filterBySubject(e : any) {
    console.log((e.target as HTMLInputElement).value)
    this.filterStr[2] = (e.target as HTMLInputElement).value
  }

  filterByBody(e : any) {
    this.filterStr[3] = (e.target as HTMLInputElement).value
  }

  filterByDate(e : any) {
    this.filterStr[4] = (e.target as HTMLInputElement).value
  }

  implementSearchAlgorithm() {
    let menu = document.getElementById("filterMenu")
    menu!.style.display = 'none'
    let filterMessage = {
      "from": this.filterStr[0],
      "to": [this.filterStr[1]],
      "subject": this.filterStr[2],
      "body": this.filterStr[3],
      "date": this.filterStr[4]
    }
    console.log("FILTER: " + filterMessage)
    this.homepageService.filterSearch(filterMessage, this.paramQuery.id).subscribe(data => {
      this.pageNo = 0
      this.prevDisabled = true
      this.nextDisabled = false
      this.messageOrder = 0
      this.allMessages = data
      this.showMessages()
      console.log("Filter Success")
    })
  }

  makeAllMessagesCheckedOrViceVerca() {
    for (let i = 0; i < this.checkedStates.length; i++)  {
      this.checkedStates[i] = !this.checkedStates[i]
    }
  }

  checkBoxActivity(index : number) {
    console.log("pageNO" + this.pageNo)
    let i = index + 4 * this.pageNo
    // console.log(this.checkedStates[i] + "checkBoxActivity"+ i)
    return this.checkedStates[i]
  }

  markAsCheckedAndViceVerca(index : number) {
    console.log("checkBoxIndex"+ index)
    let i = index + 4 * this.pageNo
    this.checkedStates[i] = !this.checkedStates[i]
    // console.log(this.checkedStates[i] + "------checked"+ i)
    for (let i = 0; i < 20; i++) {
      // console.log(this.checkedStates[i] + "------forLoopChecked"+ i)
    }
  }

  starIconActivity(index : number) {
    let i = index + 4 * this.pageNo
    // console.log("starChecked "+ i + this.starredStates[i])
    return this.starredStates[i]
  }

  goToContacts() {
    console.log(this.dynamicUrl)
    this.dynamicUrl = '/home/contacts/'+ this.paramQuery.id
    console.log(this.dynamicUrl)
    this.router.navigateByUrl(this.dynamicUrl)
  }

  logOut() {
    this.loggerService.logOut(this.paramQuery.id).subscribe(data => {
      console.log("Log out Success")
    })
  }
}


