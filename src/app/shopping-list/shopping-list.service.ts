import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChange = new EventEmitter<Ingredient[]>();
  addRecipeIngredients = new EventEmitter<Ingredient[]>();

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
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addRecipeIngredientsToList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

}
