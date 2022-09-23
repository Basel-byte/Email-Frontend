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
![Screenshot (24)](https://user-images.githubusercontent.com/54442462/192001718-3275919b-5954-4468-9420-b8b160033eab.png)
![Screenshot (26)](https://user-images.githubusercontent.com/54442462/192001737-78a7f474-7770-4ca9-a23f-b580771e9514.png)
![Screenshot (28)](https://user-images.githubusercontent.com/54442462/192001744-6d6bbab6-cfdc-47a6-8e79-02274e06e3d5.png)
![Screenshot (29)](https://user-images.githubusercontent.com/54442462/192001749-1f07eeee-4aba-4c6c-9a40-acc2082b4a12.png)
![Screenshot (30)](https://user-images.githubusercontent.com/54442462/192001752-cff74462-48e5-4414-9e69-e1441775bd32.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests





**Lab 4: A Simple Web-Based Email Program**

**Team Members:**

**Name: Louay Magdy AbdElHalim**

**Name: Ali Hassan El-Shaarawy**

**Name: Basel Ahmed Awad**

**ID: 19016195**

**ID: 19016013**

**ID: 19015513**





**1.How to run the code:**

· Run the Back-End program on local h[ost](https://localhost:8080/)[ ](https://localhost:8080/)[*https://localhost:8080/*](https://localhost:8080/)[* ](https://localhost:8080/)via

Spring boot application

· Run the Front-End program on local host [*https://localhost:4200*](https://localhost:4200/)[/](https://localhost:4200/)

via Angular application

**2. The Design Patterns used**

· **Delegation Pattern**

ü Relation between services and controllers

ü Relation between services and models

ü Relation between some services such as *userFileService* and

*MessageService*

· **Interface Pattern**

ü Relation between *MessageCriteria* class and *MessageService*

ü Relation between *UserCriteria* class and *UserService*

· **Prototype Pattern**

ü Both models objects can be cloned

· **Filter Pattern**

ü Applied in searching for messages and contacts

· **Marker Interface Pattern**

ü in cloning objects , and serialization and deserialization of Json

Objects

**3. The Design Decisions made**

· Sending messages can be from one user to multiple users

· User can use only one custom folder to drag the needed files inside

· In searching for messages by "to" attribute if you put multiple users,

you will get messages to either of them (inclusively)





**4. User Guide And UI Snippets**

· **Sign-Up & Sign-In**

Once you have opened the application, you will encounter the following page

ü **If you are already a user** to our application, **fill the required data**

correctly and click on **Sign-In**

ü **If you are a new user** to our application, use the **sign-up button** and

you will be redirected to the following page to register and **get your**

**account**, **but** you will still **need to sign-in**





· **The Profile Page**

· **Sending new message**

ü if you want to send a message to someone, click on *+New* on the

top left corner and message-box will pop-up to fill

ü you can send any type of attachments you want using the

attachment icon in the message-box bottom

ü after writing the message, you can decide to send it or save it in

the drafts folder

· **Searching**

There is two kinds of searching provided:

ü if you type what you are searching for **in the search text**

**box** at the top of screen , **default search** is applied which

will **bring any message** from the **the inbox, sent ,or even**

**the trashed messages** that somehow matches what you

are typing **in body, receiver, sender, subject , or even the**

**date of sending the message**

ü **if you apply the filter search** using the flask icon on the

right of the search text box, a **message-like form will pop**

**up ,** and you should enter one or more value to filter

messages through





· **Navigating Messages**

ü You can choose any category from those on the left side of

screen, and the required messages will appear **but on many**

ü You have only one custom folder called ***Folder*** where you

can keep what you want from the messages rather than the

other provided categories

ü You have a contacts button where you can keep some other

user contacts(you can add users, delete them or even edit

their names)

ü **You have to double click the message in this list** in order

to be shown

ü to **star** a message, **check the golden star** next to it

ü you can also **select** some messages, by **checking the square box**

on its top left corner then you can move the selected to a certain

category

· **Log-Out**

ü **on the top right corner** click on the icon and a menu will

appear so that you can choose to log-out

\5. **The UML links**

https://drive.google.com/drive/folders/12KJYuVdg5ybQKHl5KD

rD6\_okn8gn6FNC?usp=sharing



Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

