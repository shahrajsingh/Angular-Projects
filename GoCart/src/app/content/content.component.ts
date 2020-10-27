import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { Banner } from '../models/banner.model';
import { DoD } from '../models/Dealsoftheday.model';
import { Discount } from '../models/discount.model';
import { RecentProduct } from '../models/recentProduct.model';
import { ShopCategory } from '../models/shopCateogry.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  colSize: number = 4;
  mobileQuery: MediaQueryList;
  tabQuery: MediaQueryList;
  mdpidesktop: MediaQueryList;
  desktopQuery: MediaQueryList;
  resizeObservable: Observable<Event>;
  resizeSubscription: Subscription;
  producbyCateogry: ShopCategory[] = [];
  shopByDiscount: Discount[] = [];
  recentProducts: RecentProduct[] = [
    {
      img:
        'https://images.unsplash.com/photo-1521726834835-4ff1624e69da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'wwerw',
    },
    {
      img:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
      name: 'wwerw',
    },
    {
      img:
        'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      name: 'wwerw',
    },
    {
      img:
        'https://images.unsplash.com/photo-1489223339793-de491ea9108b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      name: 'wwerw',
    },
  ];
  public slides = [
    {
      src:
        'https://images.unsplash.com/photo-1521726834835-4ff1624e69da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
    {
      src:
        'https://images.unsplash.com/photo-1489223339793-de491ea9108b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
  ];
  isAuthenticated: boolean = false;
  DealsofTheDay: DoD[] = [
    {
      img:
        'https://images.unsplash.com/photo-1521726834835-4ff1624e69da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      price: '9000',
      discountedPrice: '8426',
    },
    {
      img:
        'https://images.unsplash.com/photo-1576317193864-b65b3b7f08f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1079&q=80',
      price: '9000',
      discountedPrice: '8426',
    },
    {
      img:
        'https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      price: '9000',
      discountedPrice: '8426',
    },
    {
      img:
        'https://images.unsplash.com/photo-1489223339793-de491ea9108b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      price: '9000',
      discountedPrice: '8426',
    },
  ];
  bannerads: Banner[] = [];
  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 686px)');
    this.tabQuery = media.matchMedia('(max-width: 1024px)');
    this.mdpidesktop = media.matchMedia('(max-width: 1366px');
    this.desktopQuery = media.matchMedia('(min-width: 1280px)');
  }

  ngOnInit(): void {
    if (this.mobileQuery.matches) {
      this.colSize = 1;
    } else if (this.tabQuery.matches) {
      this.colSize = 2;
    } else if (this.mdpidesktop.matches) {
      this.colSize = 3;
    } else {
      this.colSize = 4;
    }
    this.resizeObservable = fromEvent(window, 'resize');
    this.resizeSubscription = this.resizeObservable.subscribe((evt) => {
      if (window.innerWidth <= 686) {
        this.colSize = 1;
      } else if (window.innerWidth > 686 && window.innerWidth <= 1024) {
        this.colSize = 2;
      } else if (window.innerWidth > 1024 && window.innerWidth <= 1366) {
        this.colSize = 3;
      } else {
        this.colSize = 4;
      }
    });
  }
}
