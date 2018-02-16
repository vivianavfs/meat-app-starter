import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

import { Restaurant } from './restaurant/restaurant.model'
import { RestaurantsService } from './restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  viewProviders: [Title]
})
export class RestaurantsComponent implements OnInit {

	restaurants: Restaurant[]

  constructor(title: Title, private service: RestaurantsService) { 
  	title.setTitle('Meat - Restaurants')
  }

  ngOnInit() {
  	this.service.restaurants().subscribe(restaurants => this.restaurants = restaurants)
  }

}
