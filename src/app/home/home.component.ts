import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  viewProviders: [Title]
})
export class HomeComponent implements OnInit {

  constructor(title: Title) {
  	title.setTitle('Meat')
  }

  ngOnInit() {
  }

}
