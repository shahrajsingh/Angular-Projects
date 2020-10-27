import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  colSize = 5;

  resizeObservable: Observable<Event>;
  resizeSubscription: Subscription;
  Products: Product[] = [
    {
      name: 'Samsung Galaxy S9 Plus (Midnight Black, 64 GB)  (6 GB RAM)',
      category: 'electronics',
      price: 1000,
      sellerName: 'shahraj',
      id: '123',
      sellerId: '123',
      description: 'iphiine',
      image:
        'https://images.unsplash.com/photo-1521726834835-4ff1624e69da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      rating: 4.5,
    },
    {
      name: 'Product 2',
      category: 'electronics',
      price: 1000,
      sellerName: 'singh',
      id: '124',
      sellerId: '122',
      description: 'basdea',
      image:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
      rating: 4.5,
    },
    {
      name: 'Product 3',
      category: 'electronics',
      price: 1000,
      sellerName: 'singh',
      id: '124',
      sellerId: '122',
      description: 'basdea',
      image:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
      rating: 4.5,
    },
    {
      name: 'Product 4',
      category: 'electronics',
      price: 1000,
      sellerName: 'singh',
      id: '124',
      sellerId: '122',
      description: 'basdea',
      image:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
      rating: 4.5,
    },
  ];
  constructor() {}

  ngOnInit(): void {
    const x = window.innerWidth;
    const str: string = '' + x / 250;
    console.log(str);
    if (x < 420) {
      this.colSize = parseInt(str) + 1;
    } else {
      this.colSize = parseInt(str);
    }

    this.resizeObservable = fromEvent(window, 'resize');
    this.resizeSubscription = this.resizeObservable.subscribe((evt) => {
      const x = window.innerWidth;
      const str: string = '' + x / 250;
      if (x < 420) {
        this.colSize = parseInt(str) + 1;
      } else {
        this.colSize = parseInt(str);
      }
    });
  }
}
