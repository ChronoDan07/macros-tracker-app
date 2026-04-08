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

  // private totalFoods = new BehaviorSubject<Food[]>([]);
  addFood(food: Food, value: string) {
    const current = this.summaryFoods.value;
    food.quantity = Number(value);
    const foodWithTotals: Food = {
    ...food,
    totalCalories: food.calories * food.quantity,
    totalProteins: food.proteins * food.quantity,
    totalCarbs: food.carbs * food.quantity,
    totalFats: food.fats * food.quantity,
  };
    this.summaryFoods.next([...current, foodWithTotals]);
  }
}
