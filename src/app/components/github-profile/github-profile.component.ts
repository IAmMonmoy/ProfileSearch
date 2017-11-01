import { GithubService } from './../../services/github-service.service';
import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'github',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  private user:any[];
  @Input() userName: string; //get from app.component
  
  constructor(private _githubService:GithubService) 
  { 
      this.user = null;
  }

  searchUser(){
    //update the name in the github service and re run the getUser() method
    this._githubService.updateUser(this.userName); 
      this._githubService.getUser().subscribe(user => {
        this.user = user;
    });
  }

  ngOnInit() {
  }

}
