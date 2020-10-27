import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  DealsofTheDay = [
    {
      img:
        'https://images.unsplash.com/photo-1521726834835-4ff1624e69da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      price: '900000',
      name: 'Samsung Galaxy S9 Plus (Midnight Black, 64 GB)  (6 GB RAM)',

      quantity: 1,
      status: 'Ordered',
      orderDate: '14-8-2020',
      deliveryDate: '15-9-2020',
      cancel: 'true',
      deliveryAddress: 'delhi,140401',
      progress: 100,
    },
    {
      img:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
      price: '9000',
      name: 'abc',
      quantity: 1,
      status: 'packed',
      orderDate: '14-8-2020',
      deliveryDate: '15-9-2020',
      cancel: 'true',
      deliveryAddress: 'delhi,140401',
      progress: 25,
    },
    {
      img:
        'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      price: '9000',
      name: 'abc',
      quantity: 1,
      status: 'recieved',
      orderDate: '14-8-2020',
      deliveryDate: '15-9-2020',
      cancel: 'true',
      deliveryAddress: 'delhi,140401',
      progress: 25,
    },
    {
      img:
        'https://images.unsplash.com/photo-1489223339793-de491ea9108b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      price: '9000',
      name: 'abc',
      quantity: 1,
      status: 'delivered',
      orderDate: '14-8-2020',
      deliveryDate: '15-9-2020',
      cancel: 'true',
      deliveryAddress: 'delhi,140401',
      progress: 25,
    },
  ];
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}
}
