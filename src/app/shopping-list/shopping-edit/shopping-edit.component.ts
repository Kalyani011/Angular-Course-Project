import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  addIngredient() {
    if (this.nameInput && this.amountInput) {
      this.shoppingListService.addToIngredients(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    }
  }
}
