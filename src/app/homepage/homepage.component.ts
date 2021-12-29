import {Component, OnInit} from '@angular/core';
import {UUID} from 'uuid-generator-ts';
import {ActivatedRoute} from "@angular/router";
import {HomepageService} from "./homepage.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  paramQuery: any

  constructor(private activatedRoute: ActivatedRoute, private homepageService : HomepageService) {
      this.activatedRoute.params.subscribe(data => {
        this.paramQuery = data
        console.log(this.paramQuery)
      });

  }

  ngOnInit(): void {
  }


  pageNo = 0
  prevDisabled = true
  nextDisabled = false
  messageOrder = 0
  inboxSize = 0
  filterObject: any = {"to": '', "from": '', "subject": '', "body": '', "date": ''}
  searchInput!: string
  starredStates = new Array<boolean>(2000).fill(false)
  checkedStates = new Array<boolean>(2000).fill(false)
  tabsActivity = [true, false]
  newMessage!: any
  to: Array<string> = []
  subject!: string
  body!: string
  allMessages : any;
  messages : any[] = []

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
    // console.log(this.starredStates[index] + "-----starred"+index)
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
    this.to.push((e.target as HTMLInputElement).value)
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
      {"id": new UUID().toString(),
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
    this.filterObject.from = (e.target as HTMLInputElement).value
  }

  filterByTo(e : any) {
    this.filterObject.to = (e.target as HTMLInputElement).value
  }

  filterBySubject(e : any) {
    console.log((e.target as HTMLInputElement).value)
    this.filterObject.subject = (e.target as HTMLInputElement).value
  }

  filterByBody(e : any) {
    this.filterObject.body = (e.target as HTMLInputElement).value
  }

  filterByDate(e : any) {
    this.filterObject.date = (e.target as HTMLInputElement).value
  }

  implementSearchAlgorithm() {
  //   let menu = document.getElementById("filterMenu")
  //   menu!.style.display = 'none'
  //   let filterString = []
  //   let stringCriteria = []
  //   if (this.filterObject.from.length != 0) {
  //     filterString.push(this.filterObject.from)
  //     stringCriteria.push('from')
  //   }
  //   if (this.filterObject.to.length != 0) {
  //     console.log(this.filterObject.to)
  //     filterString.push(this.filterObject.to)
  //     stringCriteria.push('to')
  //   }
  //   if (this.filterObject.body.length != 0) {
  //     filterString.push(this.filterObject.body)
  //     stringCriteria.push('body')
  //   }
  //   if (this.filterObject.to.length != 0) {
  //     filterString.push(this.filterObject.subject)
  //     stringCriteria.push('subject')
  //   }
  //   if (this.filterObject.date != undefined) {
  //     filterString.push(this.filterObject.date)
  //     stringCriteria.push('date')
  //   }
  //   console.log(filterString.length+ "length")
  //   if (filterString.length == 1) {
  //     this.homepageService.monoFilterSearch(filterString, stringCriteria, this.paramQuery.id).subscribe(
  //       data => {
  //         this.pageNo = 0
  //         this.prevDisabled = true
  //         this.nextDisabled = false
  //         this.messageOrder = 0
  //         this.allMessages = data
  //         this.showMessages()
  //       }
  //     )
  //   }
  //   console.log(this.filterObject+ "-----search with filter")
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
}


