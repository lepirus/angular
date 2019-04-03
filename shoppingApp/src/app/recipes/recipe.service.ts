import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe('Tortilla de Patatas',
      'A tasty tortilla',
      'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tortilla_de_patatas_-_2009.jpg',
      [
        new Ingredient('Potatoes', 10),
        new Ingredient('Augnions', 1),
        new Ingredient('Eggs', 6)
      ]),
    new Recipe('Fat Big Burguer',
      'The Fat Big Burguer as you ever can eat',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Bacon', 2),
        new Ingredient('Cheese', 2)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();   // Exact copy of recipes array instead of accesing directly to recipes
  }

}
