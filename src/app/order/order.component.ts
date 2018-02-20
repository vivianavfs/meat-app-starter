import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { CartItem } from '../restaurant-detail/cart/cart-item.model'
import { OrdemService } from './order.service'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

	paymentOptions: RadioOption[] = [
		{label: 'Dinheiro', value:'MON'},
		{label: 'Cartão de Débito', value:'DEB'},
		{label: 'Cartão Refeição', value:'REF'}
	]

	itemsCart: CartItem[] = []

  constructor(private orderService: OrdemService) { }

  ngOnInit() {
  }

  	getItems(): CartItem[]{
		return this.orderService.getItems()
	}

	remove(item: CartItem){
		this.orderService.remove(item)
	}

	increaseQty(item: CartItem) {
		this.orderService.increaseQty(item);
	}

	decreaseQty(item: CartItem) {
		this.orderService.decreaseQty(item);
	}

}
