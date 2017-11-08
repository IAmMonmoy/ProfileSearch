import { HttpModule } from '@angular/http';
import { GithubService } from './services/github-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from  '@angular/forms'


import { AppComponent } from './app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { FacebookProfileComponent } from './facebook-profile/facebook-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    FacebookProfileComponent,
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
