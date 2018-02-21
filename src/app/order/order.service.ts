import { Injectable } from '@angular/core';

import { ShoppingCartService } from '../restaurant-detail/cart/shopping-cart.service'
import { CartItem } from '../restaurant-detail/cart/cart-item.model'

@Injectable()
export class OrdemService {

	constructor(private shoppingCartService: ShoppingCartService){}

	itemsValue(): number {
		return this.shoppingCartService.total();
	}

	getItems(): CartItem[]{
		return this.shoppingCartService.items
	}

	remove(item: CartItem){
		this.shoppingCartService.remove(item)
	}

	increaseQty(item: CartItem) {
		this.shoppingCartService.increaseQty(item);
	}

	decreaseQty(item: CartItem) {
		this.shoppingCartService.decreaseQty(item);
	}

}