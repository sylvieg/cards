import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../interfaces/card';
import { CARDS } from '../mockup/cards';

@Injectable({
    providedIn: 'root'
})
export class CardsService {
    constructor (
        private http: HttpClient,
    ) {
    }

    // return directly the mockup
    async getCards() {
        return CARDS;
    }

    // return the mockup via http - with or without an url
    getCardsObservable(): Observable<Card[]> {
        const url = "http://localhost:3000/cards";
        const headers = new HttpHeaders({ Accept: 'application/json'});
        return this.http
            .get<any> (url, {headers})
            // .pipe(tap(data => console.log(data));
            // .pipe(catchError);
    }
}