import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaloriesGoalService {
  private caloriesSource = new BehaviorSubject<number>(0);
  calories$ = this.caloriesSource.asObservable();

  setCalories(value: number) {
    this.caloriesSource.next(value)
  }
}
