import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  DealsofTheDay = [
    {
      img:
        'https://images.unsplash.com/photo-1521726834835-4ff1624e69da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      price: '900000',
      name: 'abc',
      quantity: 1,
      maxOrder: 2,
    },
    {
      img:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
      price: '9000',
      name: 'abc',
      quantity: 1,
      maxOrder: 2,
    },
    {
      img:
        'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      price: '9000',
      name: 'abc',
      quantity: 1,
      maxOrder: 2,
    },
    {
      img:
        'https://images.unsplash.com/photo-1489223339793-de491ea9108b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      price: '9000',
      name: 'abc',
      quantity: 1,
      maxOrder: 2,
    },
  ];
  constructor(private snackbar: MatSnackBar) {}

  ngOnInit(): void {}
  increaseQuantity(i) {
    if (this.DealsofTheDay[i].quantity >= this.DealsofTheDay[i].maxOrder) {
      this.snackbar.open('maximum order limit reached', 'OK', {
        duration: 1000,
        verticalPosition: 'bottom',
      });
    } else {
      this.DealsofTheDay[i].quantity++;
    }
  }
  decreaseQuantity(i) {
    if (this.DealsofTheDay[i].quantity <= 1) {
      this.snackbar.open(
        'quantity cannot be less than 1, click remove to remove item',
        'OK',
        { duration: 2000, verticalPosition: 'bottom' }
      );
    } else {
      this.DealsofTheDay[i].quantity--;
    }
  }
  deleteItem() {}
}
