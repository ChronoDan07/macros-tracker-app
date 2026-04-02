import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  HomeMessage = signal(`Hello, cristi`)
}
