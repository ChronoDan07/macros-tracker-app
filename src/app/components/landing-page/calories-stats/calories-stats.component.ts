import { Component, signal } from '@angular/core';
import { CaloriesGoalService } from '../../../services/calories-goal.service';
@Component({
  selector: 'app-calories-stats',
  imports: [],
  templateUrl: './calories-stats.component.html',
  styleUrl: './calories-stats.component.scss'
})
export class CaloriesStatsComponent {
  calories: number = 0;
  constructor(private caloriesGoalService: CaloriesGoalService) {

    this.caloriesGoalService.calories$.subscribe(val => this.calories = val)
  }

}
