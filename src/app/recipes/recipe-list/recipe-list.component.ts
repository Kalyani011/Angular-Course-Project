import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A recipe', 'A description of a recipe', 'https://pixnio.com/free-images/2017/03/25/2017-03-25-09-34-43-725x483.jpg'),
    new Recipe('A recipe', 'A description of a recipe', 'https://pixnio.com/free-images/2017/03/25/2017-03-25-09-34-43-725x483.jpg'),
    new Recipe('A recipe', 'A description of a recipe', 'https://pixnio.com/free-images/2017/03/25/2017-03-25-09-34-43-725x483.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
