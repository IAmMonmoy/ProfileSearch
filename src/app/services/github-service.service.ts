import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private userName:string;
  private clientId:string = '6b935638a2b208216e34';
  private clientSecret:string = '8b26cea4cb3e46f759e1ff293f1c0e5313d2c496';
  cd:any;
  constructor(private _http:Http) 
  { 
      this.userName = 'Rajob Raihan Monmoy';
  }

  getUser()
  {
        return this._http.get('https://api.github.com/search/users?q='+this.userName
                                +'+in:fullname&&type=Users'+'?client_id='+this.clientId+
                            '&&client_secret='+this.clientSecret).map(users => users.json());
  }

  updateUser(userName:string)
  {
      this.userName = userName;
  }
}
