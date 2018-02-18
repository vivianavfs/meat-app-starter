import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './shopping-cart.service';
import { MenuItem } from '../menu/menu-item/menu-item.model'

@Component({
  selector: 'mt-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  constructor(private service: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[]{
  	return this.service.items;
  }

  clear(){
  	this.service.clear()
  }

  addItem(item: any){
  	this.service.add(item);
  }

  removeItem(item: any){
  	this.service.remove(item)
  }

  total(): number{
  	return this.service.total()
  }

}
