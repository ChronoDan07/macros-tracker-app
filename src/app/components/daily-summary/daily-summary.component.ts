import { Component, OnInit } from '@angular/core';
import { DailySummaryService } from '../../services/daily-summary.service';
import { Food } from '../../model/food.type';

@Component({
  selector: 'app-daily-summary',
  standalone: true,
  imports: [],
  templateUrl: './daily-summary.component.html',
  styleUrl: './daily-summary.component.scss',
})
export class DailySummaryComponent implements OnInit {
  summaryFoods: Food[] = [];

  constructor(private dailySummaryService: DailySummaryService) {}

  ngOnInit(): void {
    this.dailySummaryService.summaryFoods$.subscribe(list => {
      this.summaryFoods = list;
    });
  }
}
