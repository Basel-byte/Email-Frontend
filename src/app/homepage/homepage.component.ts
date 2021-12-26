import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  starredStates = new Array<boolean>(2000)
  tabsActivity = [true, false]
  messages : any[] = [
    {
      "from" : "Basel Ahmed",
      "subject" : "Paint project",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut l"
    },
    {
      "from" : "Abd El Aziz",
      "subject" : "Medical treatment",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut l"
    },
    {
      "from" : "Louay Magdy",
      "subject" : "Numerical Assignment",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut l"
    }
  ]

  showProfileMenu() {
    let menu = document.getElementById("profileMenu")
      if (menu!.style.visibility == 'visible')
        menu!.style.visibility = 'hidden'
      else
        menu!.style.visibility = 'visible'
  }

  showFilterMenu() {
    let menu = document.getElementById("filterMenu")
    if (menu!.style.display == 'none')
      menu!.style.display = 'block'
    else
      menu!.style.display = 'none'
  }

  openNewMessageModal() {
    let modal = document.getElementById("newMessageModal")
    modal!.style.display = 'block'
  }

  closeNewMessageModal() {
    let modal = document.getElementById("newMessageModal")
    modal!.style.display = 'none'
  }

  toggleStar(starId : string) {
    let index = Number(starId[4])
    this.starredStates[index] = !this.starredStates[index]

  }

  changeActivity() {
    this.tabsActivity[0] = !this.tabsActivity[0]
    this.tabsActivity[1] = !this.tabsActivity[1]
  }



}
