import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipe') recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void { }

  addToShoppingList() {
    this.recipeService.addRecipeIngredients(this.recipe.ingredients);
  }
}
