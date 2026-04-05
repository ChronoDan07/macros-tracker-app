import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';



@Component({
  selector: 'app-root',
  imports: [LandingPageComponent],
  template: `
    <main>
      <app-landing-page />
    </main>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('macros-tracker-app');
}
