import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header';



@Component({
  selector: 'app-root',
  imports: [LandingPageComponent, HeaderComponent],
  template: `
      <app-header />
    <main>
      <app-landing-page />
    </main>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('macros-tracker-app');
}
