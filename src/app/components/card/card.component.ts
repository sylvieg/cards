import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card';


@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['../../app.component.scss']
})

export class CardComponent implements OnInit {
    @Input() card!: Card;

    constructor () {
    }

    ngOnInit(): void {
    }
}