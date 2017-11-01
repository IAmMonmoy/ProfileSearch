import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private userName:string;

  constructor(private _http:Http) 
  { 
      this.userName = 'Rajob Raihan Monmoy';
  }

  getUser()
  {
        console.log("yes");
        return this._http.get('https://api.github.com/search?q='+this.userName+'+in:fullname&type=User')
        .map(profile => profile.json());
  }

  updateUser(userName:string)
  {
      this.userName = userName;
  }
}
