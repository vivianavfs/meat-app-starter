import {NgModule} from '@angular/core'

import {OrdemService} from '../order/order.service'
import {RestaurantsService} from '../restaurants/restaurants.service'
import {ShoppingCartService} from '../restaurant-detail/cart/shopping-cart.service'


@NgModule({
	providers: [OrdemService,RestaurantsService,ShoppingCartService]
})

export class CoreModule {}