import { Component, OnInit, Input } from '@angular/core';
import { DoD } from '../models/Dealsoftheday.model';

@Component({
  selector: 'app-hotdeals',
  templateUrl: './hotdeals.component.html',
  styleUrls: ['./hotdeals.component.scss'],
})
export class HotdealsComponent implements OnInit {
  @Input() hotdeals: DoD[];
  constructor() {}

  ngOnInit(): void {}
  scrollright() {
    document.getElementById('image-container-wraper').scrollLeft += 250;
  }
  scrollleft() {
    document.getElementById('image-container-wraper').scrollLeft -= 250;
  }
}
