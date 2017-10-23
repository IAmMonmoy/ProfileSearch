import { GithubService } from './../../services/github-service.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'github',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private _githubService:GithubService) 
  { 
      this._githubService.getUser().subscribe(user => {
          console.log(user);
      });
  }

  ngOnInit() {
  }

}
