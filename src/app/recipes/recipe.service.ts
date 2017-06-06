import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
    new Recipe('Test Recipe', 'Simply a test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg'),
    new Recipe('Test Recipe 2', 'Just a test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
