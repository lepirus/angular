import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/internal/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients().slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // One Solution
    // for (const ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    // Alternative Solution
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
