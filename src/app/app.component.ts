import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from './modules/authorization/components/login/login.component';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
  stagger,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-100%)', background: 'transparent'}),
        animate('1.2s', style({ opacity: 1, transform: 'translate(0, 0)' })),
      ]),

      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [style({ transform: 'translateX(-100%)', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [animate('1s ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))]),
          query(':enter', [animate('1s ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))])
         ]),
         query(':enter', animateChild())
       ])

      // transition('* => void', [
      //   animate(' 1.2s ', style({ opacity: 0 })),
      // ]),
    ])
  ],
})

export class AppComponent {
  title = 'login-app';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}




