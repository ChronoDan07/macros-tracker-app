import { Component, computed, inject } from '@angular/core';
import { DailySummaryService } from '../../services/daily-summary.service';
import { Food } from '../../model/food.type';

@Component({
  selector: 'app-daily-summary',
  standalone: true,
  imports: [],
  templateUrl: './daily-summary.component.html',
  styleUrl: './daily-summary.component.scss',
})
export class DailySummaryComponent  {
  service = inject(DailySummaryService);
  summaryFoods = this.service.summaryFoods;
  totalCalories = this.service.totalCalories;
  totalProteins = this.service.totalProteins;
  totalCarbs = this.service.totalCarbs;
  totalFats = this.service.totalFats;
}
