import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pasta & Eggs',
      'A description of a recipe',
      'https://pixnio.com/free-images/2017/03/25/2017-03-25-09-34-43-725x483.jpg',
      [new Ingredient('Pasta', 100), new Ingredient('Eggs', 4), new Ingredient('Tomatoes', 4)]),
    new Recipe('Spiced Hot Chocolate',
      'A description of a recipe',
      'https://rfp584kk0i-flywheel.netdna-ssl.com/wp-content/uploads/2020/12/Cozy-hot-chocolate.jpg',
      [new Ingredient('Chocolate', 1), new Ingredient('Spices', 4)]
    ),
    new Recipe('Pizza Casserole',
      'A description of a recipe',
      'https://pixnio.com/free-images/2017/03/25/2017-03-25-09-34-43-725x483.jpg',
      [new Ingredient('Cheese', 10), new Ingredient('Bread', 1)]
    )
  ]

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipeIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addRecipeIngredientsToList(ingredients);
  }
}
