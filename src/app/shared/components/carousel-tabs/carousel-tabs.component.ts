import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { CarouselTabContentDirective } from '../../directives/carousel-tab-content.directive';

@Component({
  selector: 'carousel-tabs',
  templateUrl: './carousel-tabs.component.html',
  styleUrls: ['./carousel-tabs.component.scss'],
})
export class CarouselTabsComponent implements AfterContentInit {
  @ContentChildren(CarouselTabContentDirective)
  tabContents!: QueryList<CarouselTabContentDirective>;
  tabs: CarouselTabContentDirective[] = [];

  ngAfterContentInit() {
    this.tabs = this.tabContents.toArray();
  }
}
