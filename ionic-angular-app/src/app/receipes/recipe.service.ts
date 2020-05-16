import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'One',
      imageUrl: 'https://pluspng.com/img-png/food-png-food-salad-image-2962-428.png',
      ingredients: ['French', 'French', 'Fries' , 'Potato']
    },
    {
      id: '2',
      title: 'Two',
      imageUrl: 'https://pluspng.com/img-png/food-png-food-salad-image-2962-428.png',
      ingredients: ['French', 'Fries' , 'Potato']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(id: string) {
    return {
      ... this.recipes.find((recipe) => recipe.id === id)
    }
  }
}
