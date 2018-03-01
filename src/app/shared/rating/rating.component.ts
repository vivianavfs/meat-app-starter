import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

	rates: number[] = [1,2,3,4,5]

	rate: number = 0
	prevRate: number

	@Output() rated = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number){
  	this.rate = r;
  	this.prevRate = undefined
  	this.rated.emit(this.rate)
  }

  setTemporaryRate(r: number){
  	if(this.prevRate===undefined){
  		this.prevRate = this.rate
  	}
  	this.rate = r
  }

  clear(){
  	if(this.prevRate !== undefined){
  		this.rate = this.prevRate
  		this.prevRate = undefined
  	}
  }
}
