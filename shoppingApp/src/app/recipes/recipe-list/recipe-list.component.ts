import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test description',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
    new Recipe('A Test Recipe2', 'Test description 2',
      'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
