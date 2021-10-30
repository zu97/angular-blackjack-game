const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['diams', 'hearts', 'clubs', 'spades'];

export class Card {
  scores: {[key: string]: number} = {J: 10, Q: 10, K: 10, A: 11};
  constructor(public rank: string, public suit: string) {}

  getScore() {
    const score = parseInt(this.rank);
    if (isNaN(score)) {
      return this.scores[this.rank];
    }

    return score;
  }
}

export class CardDeck {
  cards: Card[] = [];

  constructor() {
    ranks.forEach(rank => {
      suits.forEach(suit => {
        const card = new Card(rank, suit);
        this.cards.push(card);
      });
    });
  }

  getRandomNumberToFrom(to: number, from = 0) {
    return Math.floor(Math.random() * (from - to + 1) + from);
  }

  getCard(): Card {
    const randomNumber = this.getRandomNumberToFrom(this.cards.length);
    return this.cards.splice(randomNumber, 1)[0];
  }

  getCards(howMany: number): Card[] {
    let result: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      result.push(this.getCard());
    }

    return result;
  }
}
