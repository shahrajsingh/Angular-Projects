import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders-mobile',
  templateUrl: './orders-mobile.component.html',
  styleUrls: ['./orders-mobile.component.scss'],
})
export class OrdersMobileComponent implements OnInit {
  @Input() arr: [];
  constructor() {}

  ngOnInit(): void {}
}
