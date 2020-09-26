import { Component } from '@angular/core';

@Component({
  selector: 'anthonykuong-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  items = [
    {
      brand: 'Bike',
      price: 20
    }
    ,
    {
      brand: 'Trek',
      price: 420
    }
    ,
    {
      brand: 'Bikers',
      price: 200
    }
    ,
  ]
}
