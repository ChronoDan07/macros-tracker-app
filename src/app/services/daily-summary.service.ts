import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
BehaviorSubject;
import { Food } from '../model/food.type';

@Injectable({
  providedIn: 'root',
})
export class DailySummaryService {
  private summaryFoods = new BehaviorSubject<Food[]>([]);
  summaryFoods$ = this.summaryFoods.asObservable();

  addFood(food: Food) {
    const current = this.summaryFoods.value;
    this.summaryFoods.next([...current, food]);
  }
}
