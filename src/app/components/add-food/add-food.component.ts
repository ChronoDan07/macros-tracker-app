import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FoodService } from '../../services/food';
import { Food } from '../../model/food.type';

@Component({
  selector: 'app-add-food',
  imports: [ReactiveFormsModule],
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.scss',
})
export class AddFoodComponent {
  foodForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    units: new FormControl('', { nonNullable: true }),
    calories: new FormControl(0, { nonNullable: true }),
    proteins: new FormControl(0, { nonNullable: true }),
    carbs: new FormControl(0, { nonNullable: true }),
    fats: new FormControl(0, { nonNullable: true }),
  });

  constructor(private foodService: FoodService) {}

  onSubmit() {
    this.foodService.addFood(this.foodForm.value as Food);
    this.foodForm.reset();
  }
}
