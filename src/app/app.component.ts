import { Component } from '@angular/core';
import {Card, CardDeck} from "../lib/CardDeck";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blackjack';
  cardDeck: CardDeck;
  cards: Card[];
  score = 0;

  constructor() {
    this.cardDeck = new CardDeck();
    this.cards = this.cardDeck.getCards(2);
    this.score = this.calcScore(this.cards);
  }

  getCard() {
    if (this.isUserWin() || this.isUserLose()) {
      return;
    }

    const card = this.cardDeck.getCard();
    this.cards.push(card);
    this.score += this.calcScore([card]);
  }

  resetGame() {
    this.cardDeck = new CardDeck();
    this.cards = this.cardDeck.getCards(2);
    this.score = this.calcScore(this.cards);
  }

  calcScore(cards: Card[]) {
    let result = 0;
    cards.forEach(card => {
      result += card.getScore();
    });

    return result;
  }

  isUserWin() {
    return this.score === 21;
  }

  isUserLose() {
    return this.score > 21;
  }
}
