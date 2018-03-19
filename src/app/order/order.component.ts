import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'

import { RadioOption } from '../shared/radio/radio-option.model';
import { CartItem } from '../restaurant-detail/cart/cart-item.model'
import { OrdemService } from './order.service'
import { Order, OrderItem } from './order.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

	orderForm: FormGroup
	emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	numberPattern = /^[0-9]*$/

	paymentOptions: RadioOption[] = [
		{label: 'Dinheiro', value:'MON'},
		{label: 'Cartão de Débito', value:'DEB'},
		{label: 'Cartão Refeição', value:'REF'}
	]

  constructor(private orderService: OrdemService, 
  			private router: Router, 
  			private formBuilder: FormBuilder) { }

  delivery = 8;

  ngOnInit() {
  	this.orderForm = this.formBuilder.group({
  		name: ['', [Validators.required, Validators.minLength(5)]],
  		email:['', [Validators.required, Validators.pattern(this.emailPattern)]],
  		emailConfirmation: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  		address: ['', [Validators.required, Validators.minLength(5)]],
  		number: ['', [Validators.required, Validators.pattern(this.numberPattern)]],
  		optionalAddress: '',
  		paymentOption: ['', Validators.required]
  	}, {validator: OrderComponent.equalsTo})
  }

  	static equalsTo(group: AbstractControl):{[key:string]: boolean}{
  		const email = group.get('email')
  		const emailConfirmation = group.get('emailConfirmation')
  		if(!email || !emailConfirmation){
  			return undefined
  		}
  		if (email.value !== emailConfirmation.value) {
  			return {emailsNotMatch:true}
  		}
  		return undefined
  	}

  	itemsValue(): number {
  		return this.orderService.itemsValue();
  	}

  	items(): CartItem[] {
		return this.orderService.getItems()
	}

	remove(item: CartItem) {
		this.orderService.remove(item)
	}

	increaseQty(item: CartItem) {
		this.orderService.increaseQty(item);
	}

	decreaseQty(item: CartItem) {
		this.orderService.decreaseQty(item);
	}

	checkoutOrder(order: Order) {
		order.items = this.items().map((item: CartItem) => new OrderItem(item.quantity,item.menuItem.id))
		this.orderService.checkoutOrder(order).subscribe((orderId: string) => {
			this.router.navigate(['/order-summary'])
			this.orderService.clear()
		})
	}

}