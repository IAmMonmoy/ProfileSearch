import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private userName:string;

  constructor(private _http:Http) { 
      console.log('in githubservice...');
      this.userName="IAmMonmoy";
  }

}
