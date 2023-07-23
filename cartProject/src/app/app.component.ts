import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flip', [
      state('notFlipped', style({
        transform: 'none',
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('notFlipped => flipped', [
        animate('0.9s')
      ]),
      transition('flipped => notFlipped', [
        animate('0.9s')
      ])
    ])
  ]
})
export class AppComponent {
  flipped = false;
}