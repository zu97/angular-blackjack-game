import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  suitIcons: {[key: string]: string} = {diams: '♦', hearts: '♥', clubs: '♣', spades: '♠'};

  @Input() rank = '';
  @Input() suit = '';

  getClassName() {
    const rank = this.rank.toLowerCase();
    const suit = this.suitIcons[this.suit];

    return `rank-${rank} ${suit}`;
  }
}
