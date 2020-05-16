import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.page.html',
  styleUrls: ['./receipes.page.scss'],
})
export class ReceipesPage implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

}
