import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes'


import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component'
import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { CartComponent } from './restaurant-detail/cart/cart.component';
import { MenuItemComponent } from './restaurant-detail/menu/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    AboutComponent,
    RestaurantComponent,
    HomeComponent,
    HeaderComponent,
    RestaurantDetailComponent,
    MenuComponent,
    CartComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
