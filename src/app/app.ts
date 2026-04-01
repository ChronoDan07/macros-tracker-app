import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, HeaderComponent],
  template: `
    <app-header />
    <app-home />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('macros-tracker-app');
}
