import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { MenuItem } from './menu-item/menu-item.model'
import { RestaurantsService } from '../../restaurants/restaurants.service'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

	menuItens: MenuItem[]

  constructor(private service: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.service.menuOfRestaurant(this.route.parent.snapshot.params['id'])
  	.subscribe(itens => this.menuItens = itens)
  }

}
