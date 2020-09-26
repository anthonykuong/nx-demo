import { Component } from '@angular/core';

@Component({
  selector: 'anthonykuong-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  items = [
    {
    brand: 'Mercedes',
    price: 20
    }
    ,
    {
      brand: 'Kia',
      price: 420
    }
    ,
    {
      brand: 'Honda',
      price: 200
    }
    ,
  ]
}
