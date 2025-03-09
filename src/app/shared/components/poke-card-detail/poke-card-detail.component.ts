import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card-detail',
  templateUrl: './poke-card-detail.component.html',
  styleUrls: ['./poke-card-detail.component.scss'],
})
export class PokeCardDetailComponent implements OnInit {
  tabSelected = 0;
  constructor() {}

  ngOnInit(): void {}

  tabPrev() {
    this.tabSelected -= 1;
  }

  tabNext() {
    this.tabSelected += 1;
  }

  tabSelect(event: any) {}
}
