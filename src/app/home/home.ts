import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  HomeMessage = signal(`Hello, cristi`)
  keyUpHandler(event: KeyboardEvent) {
    console.log(`User pressed the ${event.key} key`)
  }
}
