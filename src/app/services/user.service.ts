import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
    public url: string;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    login(user) {
        user.gettoken = true;
        let params = JSON.stringify(user);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this._http.post(
            this.url + 'login',
            params,
            {
                headers: headers
            }
        ).map(
            res => res.json()
        );
    }
}
