import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  ingredientAdded = new EventEmitter<void>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 7),
    new Ingredient('Tomato', 9)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit();
  }

}
