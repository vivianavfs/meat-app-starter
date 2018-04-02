import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { InputComponent } from './input/input.component'
import { RadioComponent } from './radio/radio.component'
import { RatingComponent } from './rating/rating.component'

import {OrdemService} from '../order/order.service'
import {RestaurantsService} from '../restaurants/restaurants.service'
import {ShoppingCartService} from '../restaurant-detail/cart/shopping-cart.service'


@NgModule({
	declarations:[InputComponent, RadioComponent, RatingComponent],
	imports:[CommonModule, ReactiveFormsModule, FormsModule],
	exports:[InputComponent, RadioComponent, RatingComponent,
			CommonModule, ReactiveFormsModule, FormsModule]
})

export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [OrdemService,RestaurantsService,ShoppingCartService]
		}
	}
}