import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  quantity: number = 1;
  product: Product = {
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
  };

  constructor() {}

  ngOnInit(): void {}
  favorite() {
    document.getElementById('favorite').innerHTML = 'favorite';
    document.getElementById('atw').innerHTML = 'Wishlisted&nbsp;';
    document.getElementById('favorite').style.color = '#FF3E6C';
  }
}
