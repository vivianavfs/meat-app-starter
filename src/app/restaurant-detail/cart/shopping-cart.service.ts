import { MenuItem } from '../menu/menu-item/menu-item.model'
import { CartItem } from './cart-item.model'

export class ShoppingCartService {

	items: CartItem[] = []

	constructor() {}

	clear() {
		this.items = []
	}

	add(item: MenuItem){
		let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
		if(foundItem){
			foundItem.quantity++
		}
		else{
			this.items.push(new CartItem(item))
		}
		
	}

	remove(item: CartItem){
		this.items.splice(this.items.indexOf(item), 1)
	}

	total(): number {
		return this.items.map(item => item.value()).reduce((prev, value)=> prev + value, 0)
	}
}