import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninpageComponent} from "./signinpage/signinpage.component";
import {SignuppageComponent} from "./signuppage/signuppage.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {path: '', redirectTo: 'signIn', pathMatch: 'full'},
  {path: 'signIn', component: SigninpageComponent},
  {path: 'signUp', component: SignuppageComponent},
  {path: 'home/:id', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
