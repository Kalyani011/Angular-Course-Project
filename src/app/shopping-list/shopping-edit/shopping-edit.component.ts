import { Component, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls : ['./shopping-edit.component.css']
})

export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput : ElementRef;
  @ViewChild('amountInput') amountInput : ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>();

  addIngredient(){
    if(this.nameInput && this.amountInput){
      this.addedIngredient.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    }
  }
}
