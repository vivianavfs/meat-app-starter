import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component'
import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { CartComponent } from './restaurant-detail/cart/cart.component';
import { MenuItemComponent } from './restaurant-detail/menu/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { ShoppingCartService } from './restaurant-detail/cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrdemService } from './order/order.service';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantComponent,
    HomeComponent,
    HeaderComponent,
    RestaurantDetailComponent,
    MenuComponent,
    CartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService, ShoppingCartService, OrdemService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
