import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food';
import { Food } from '../../model/food.type';

@Component({
  selector: 'app-food-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-table.component.html',
  styleUrl: './food-table.component.scss'
})
export class FoodTableComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foodService.foods$.subscribe(list => {
      this.foods = list;
    });
  }
}