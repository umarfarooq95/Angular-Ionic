import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.page.html',
  styleUrls: ['./receipes.page.scss'],
})
export class ReceipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: '1',
      title: 'one',
      imageUrl: 'https://pluspng.com/img-png/food-png-food-salad-image-2962-428.png',
      ingredients: ['French']
    },
    {
      id: '2',
      title: 'Two',
      imageUrl: 'https://pluspng.com/img-png/food-png-food-salad-image-2962-428.png',
      ingredients: ['French', 'Fries' , 'Potato']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
