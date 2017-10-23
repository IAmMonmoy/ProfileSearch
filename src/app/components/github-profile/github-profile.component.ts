import { GithubService } from './../../services/github-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'github',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private _githubService:GithubService) { 

  }

  ngOnInit() {
  }

}
