
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in')),
        transition('small <=> large', animate('300ms ease-in', style({
          transform: 'translateY(40px)'
        }))),
    ]),
  ]
})
export class AppComponent {
  title = 'app';

  // tslint:disable-next-line:no-inferrable-types
  state: string = 'small';
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
}
}
