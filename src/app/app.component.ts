import { Component } from '@angular/core';
import {Card, CardDeck} from "../lib/CardDeck";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardDeck: CardDeck;
  cards: Card[];

  constructor() {
    this.cardDeck = new CardDeck();
    this.cards = this.cardDeck.getCards(2);
  }
}
