import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  startedEditing = new Subject<number>();
  ingredientAdded = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 7),
    new Ingredient('Tomato', 9)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index : number) {
    return this.ingredients[index];
  }

  updateIngredient(index : number, newIngredient : Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredients(newIngredients: Ingredient[]) {

    this.ingredients.push(...newIngredients);
    this.ingredientAdded.next(this.ingredients.slice());
  }

}
