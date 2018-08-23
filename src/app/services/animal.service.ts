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

    getAnimal(id) {
        const token = this.storage.retrieve('token');
        const headers = new Headers({
            'Authorization': token
        });
        return this._http.get(
            `${this.url}animal/${id}`,
            { headers: headers }
        ).map(
            res => res.json()
        );
    }

    createAnimal(animal) {
        const token = this.storage.retrieve('token');
        const params = JSON.stringify(animal);
        const headers = new Headers({
            'Authorization': token,
            'Content-Type': 'application/json'
        });
        return this._http.post(
            `${this.url}animal`,
            params,
            { headers: headers }
        ).map(
            res => res.json()
        );
    }

    updateAnimal(animal) {
        const token = this.storage.retrieve('token');
        const params = JSON.stringify(animal);
        const headers = new Headers({
            'Authorization': token,
            'Content-Type': 'application/json'
        });
        return this._http.put(
            `${this.url}animal/${animal._id}`,
            params,
            { headers: headers }
        ).map(
            res => res.json()
        );
    }
    
    deleteAnimal(id) {
        const token = this.storage.retrieve('token');
        const headers = new Headers({
            'Authorization': token
        });
        return this._http.delete(
            `${this.url}animal/${id}`,
            { headers: headers }
        ).map(
            res => res.json()
        );
    }

}