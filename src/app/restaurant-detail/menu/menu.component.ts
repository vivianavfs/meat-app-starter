import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { MenuItem } from './menu-item/menu-item.model'
import { RestaurantsService } from '../../restaurants/restaurants.service'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

	itens: Observable<MenuItem[]>

  constructor(private service: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.itens = this.service.menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
