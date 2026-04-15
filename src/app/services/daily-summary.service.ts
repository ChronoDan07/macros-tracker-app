import { Injectable, signal, computed } from '@angular/core';
import { Food } from '../model/food.type';

@Injectable({
  providedIn: 'root',
})
export class DailySummaryService {
  summaryFoods = signal<Food[]>([]);
  
  addFood(food: Food, value: string) {
    const quantity = Number(value);
    const foodWithTotals: Food = {
    ...food,
    quantity,
    totalCalories: food.calories * quantity,
    totalProteins: food.proteins * quantity,
    totalCarbs: food.carbs * quantity,
    totalFats: food.fats * quantity,
  };
    this.summaryFoods.update(list => [...list, foodWithTotals]);
  }

  totalCalories = computed(() => {
   return this.summaryFoods().reduce((sum, f) => sum + f.totalCalories, 0)
  });

  totalProteins = computed(() => {
    return this.summaryFoods().reduce((sum, f) => sum + f.totalProteins, 0)
  });

  totalCarbs = computed(() => {
     return this.summaryFoods().reduce((sum, f) => sum + f.totalCarbs, 0)
  });

  totalFats = computed(() => {
    return this.summaryFoods().reduce((sum, f) => sum + f.totalFats, 0)
  });
}
