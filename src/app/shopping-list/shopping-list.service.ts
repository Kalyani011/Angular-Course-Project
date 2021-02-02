import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChange = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 3)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addToIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addRecipeIngredientsToList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

}
