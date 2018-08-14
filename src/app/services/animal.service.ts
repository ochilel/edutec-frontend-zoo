import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class AnimalService {

    public url: string;

	constructor(
        private _http: Http,
        private storage: LocalStorageService
    ){
		this.url = GLOBAL.url;
    }
    
    getAnimals() {
        const token = this.storage.retrieve('token');
        const headers = new Headers({
            'Authorization': token
        });
        return this._http.get(
            this.url + 'animals',
            { headers: headers }
        ).map(
            res => res.json()
        );
    }

}