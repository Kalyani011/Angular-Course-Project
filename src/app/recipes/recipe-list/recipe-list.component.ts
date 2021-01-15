import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pasta & Eggs', 'A description of a recipe', 'https://pixnio.com/free-images/2017/03/25/2017-03-25-09-34-43-725x483.jpg'),
    new Recipe('Spiced Hot Chocolate', 'A description of a recipe', 'https://rfp584kk0i-flywheel.netdna-ssl.com/wp-content/uploads/2020/12/Cozy-hot-chocolate.jpg'),
    new Recipe('Pizza Casserole', 'A description of a recipe', 'https://pixnio.com/free-images/2017/03/25/2017-03-25-09-34-43-725x483.jpg')
  ]
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit(): void {

  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
