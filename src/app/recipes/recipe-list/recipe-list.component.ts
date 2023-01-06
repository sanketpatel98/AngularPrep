import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Mumbai Pav Bhaji','Bombay special pav Bhaji!!','https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-1025x1536.jpg'),
    new Recipe('Samosa','Ahmedabad special Samosa!!','https://res.cloudinary.com/grow-me/image/fetch/c_fill,h_300,q_auto,w_300/f_auto,fl_lossy/https%3A%2F%2Fwww.cubesnjuliennes.com%2Fwp-content%2Fuploads%2F2020%2F08%2FBest-Mutton-Keema-Samosa-Recipe-1.jpg')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
