import { Component } from '@angular/core';
import { Card } from './interfaces/card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [];
  filter: string = ''; // doing only one filter as probabilty patient name = arrhythmia is small

  constructor (
    private cardsService: CardsService,
  ) {
  }
  ngOnInit(): void {
    // this.cards = this.cardsService.getCards(); // DEBUG
    this.cardsService.getCardsObservable().subscribe( cards => this.cards = cards);
  }
  
  // is a card ok against column and filter
  cardOk(card: Card, filter: string): Boolean {
    if ((filter === 'TODO' && card.status !== 'PENDING') || (filter === 'DONE' && card.status === 'PENDING')) {
      return false;
    }
    return (this.filter === '' 
      || card.patient_name.toUpperCase().includes(this.filter.toUpperCase())
      || card.arrhythmias.find( (a: string) => a.toUpperCase().includes(this.filter.toUpperCase())) != null);
  }

  // does a card exists for the filter
  cardExists(filter:string): Boolean {
    console.log(this.filter, filter, this.cards.find( (c: Card) => c.status === 'PENDING' ));
    if (filter === 'TODO' && this.cards.find( (c: Card) => c.status === 'PENDING' )) {
      return true;
    }
    if (filter === 'DONE' && this.cards.find( (c: Card) => c.status !== 'PENDING')) {
      return true;
    }
    return false;
  }
}
