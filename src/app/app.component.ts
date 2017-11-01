import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { Component,AfterViewInit,ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  userName:string;
  @ViewChild(GithubProfileComponent) githubProfile;

    ngAfterViewInit()
    {
      
    }
    searchUser()
    {
      this.githubProfile.searchUser();
    }
  
}
