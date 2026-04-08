import { Component, signal } from '@angular/core';
import { CaloriesGoalComponent } from '../components/landing-page/calories-goal/calories-goal.component';
import { CaloriesStatsComponent } from '../components/landing-page/calories-stats/calories-stats.component';
import { AddFoodComponent } from '../components/add-food/add-food.component';
import { FoodTableComponent } from '../components/food-table/food-table.component';
import { DailySummaryComponent } from '../components/daily-summary/daily-summary.component';

@Component({
  selector: 'app-landing-page',
  imports: [CaloriesGoalComponent, CaloriesStatsComponent, AddFoodComponent, FoodTableComponent, DailySummaryComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  
}
