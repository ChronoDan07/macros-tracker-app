import { Component, signal } from '@angular/core';
import { CaloriesGoalService } from '../../../services/calories-goal.service';

@Component({
  selector: 'app-calories-goal',
  imports: [],
  templateUrl: './calories-goal.component.html',
  styleUrl: './calories-goal.component.scss'
})
export class CaloriesGoalComponent {
  constructor(private caloriesGoalService: CaloriesGoalService) {}
  handleSubmit(value: string) {
    const caloriesNumber = Number(value);
    if (!isNaN(caloriesNumber)) {
    this.caloriesGoalService.setCalories(caloriesNumber);
  }
  }
}
