# Email

## Team Members:
    Ali Hassan ElSharawy
    Basel Ahmed
    Louay Magdy

## Design Decisions
    - Sending messages can be from one user to multiple users
    - User can use only one custom folder to drag the needed files inside
    - In searching for messages by "to" attribute if you put multiple users, you will get messages to either of them (inclusively)

## User Guide
- Sign-Up & Sign-In
  Once you have opened the application, you will encounter the following page
  ![{4EB2F767-D0B7-4C7C-99A2-67524B1D92B1} png](https://user-images.githubusercontent.com/95590176/192006250-873c4aab-c217-4898-b25d-ba1781abd0fd.jpg)
        
  If you are already a user to our application, fill the required data correctly and click on Sign-In
  If you are a new user to our application, use the sign-up button and you will be redirected to the following page to register and get your account, but you will still need to sign-in
  ![{6A2BCDB0-91D4-430B-BDD1-A75FF59F6B67} png](https://user-images.githubusercontent.com/95590176/192006439-ab1977dc-f3d6-4fae-92c0-378a0061994d.jpg)

- Profile Page
  ![{C04A30F2-50E3-49D5-B51F-415E7008358F} png](https://user-images.githubusercontent.com/95590176/192006971-5a37fb93-70a4-4cc3-a7c3-c51c2dc6f02a.jpg)

- Sending new messages
  - if you want to send a message to someone, click on +New on the top left corner and message-box will pop-up to fill
  - you can send any type of attachments you want using the attachment icon in the message-box bottom           
  - after writing the message, you can decide to send it or save it in the drafts folder
  ![{1005D70C-A1A3-4F65-8A52-1670D338ADB2} png](https://user-images.githubusercontent.com/95590176/192007233-df910847-9ced-4d85-a65b-143ee9fa25d2.jpg)
  
- Searching
  - There is two kinds of searching provided:
     - if you type what you are searching for in the search text box at the top of screen , default search is applied which will bring any message from the the inbox, sent ,or even the trashed messages that somehow matches what you are typing in body, receiver, sender, subject , or even the date of sending the message
     - if you apply the filter search using the flask icon on the right of the search text box, a message-like form will pop up , and you should enter one or more value to filter messages through
     ![{9FE371EE-8E48-4CE7-8997-D8885FFBD3C3} png](https://user-images.githubusercontent.com/95590176/192007545-969f537f-4976-495d-a8e9-e22cc25a92a5.jpg)
  
- Navigating Messages
  - You can choose any category from those on the left side of screen, and the required messages will appear but on many  
  - You have only one custom folder called Folder where you can keep what you want from the messages rather than the other provided categories
  - You have a contacts button where you can keep some other user contacts(you can add users, delete them or even edit their names)
  - You have to double click the message in this list in order to be shown
  ![{D65C502B-A2E5-41D8-86AA-F19664C62DE0} png](https://user-images.githubusercontent.com/95590176/192008023-147f1a39-3c6f-4db7-95d1-065c2c6af172.jpg)
  - to star a message, check the golden star next to it
  ![{EA8D66C7-5BD5-46B8-BC40-428AD499E689} png](https://user-images.githubusercontent.com/95590176/192008137-5734db3f-736a-433d-8a99-8b258747c99e.jpg)
  - you can also select some messages, by checking the square box on its top left corner then you can move the selected to a certain category

- Log out
  - on the top right corner click on the icon and a menu will appear so that you can choose to log-out
  ![{9245EAE9-E699-4F52-9A25-8AAAD9406E53} png](https://user-images.githubusercontent.com/95590176/192008308-6d86006c-5eaa-4c87-b1df-5a80a40da258.jpg)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

