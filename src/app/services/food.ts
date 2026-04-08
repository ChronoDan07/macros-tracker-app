import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Food} from '../model/food.type'

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private foods = new BehaviorSubject<Food[]>([]);
  foods$ = this.foods.asObservable();

  addFood(food: Food) {
    const current = this.foods.value;
    this.foods.next([...current, food]);
  }
}
