import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.scss'],
})
export class PriceDetailsComponent implements OnInit {
  cartTotal = 1000;

  TotalItems = 4;
  discount = 500;
  deliveryCharges = 'Free';
  constructor() {}

  ngOnInit(): void {}
}
