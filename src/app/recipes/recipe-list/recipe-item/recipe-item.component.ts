import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe: Recipe;
  @Input('id') id: number;

  constructor() { }

  ngOnInit(): void {

  }
  // recipeSelected() {
  //   this.recipeService.selectedRecipe.emit(this.recipe);
  // }
}
