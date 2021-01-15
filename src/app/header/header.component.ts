import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  collapsed = true;
  @Output('selectedTab') selectedTab = new EventEmitter<string>();

  switchTab(tabName:string) {    
    tabName === 'recipes' || tabName === 'shoppingList' ? this.selectedTab.emit(tabName) : this.selectedTab.emit('recipes');
  }
}
