import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PokeCardDetailComponent } from '../poke-card-detail/poke-card-detail.component';

@Component({
  selector: 'poke-card-small',
  templateUrl: './poke-card-small.component.html',
  styleUrls: ['./poke-card-small.component.scss'],
})
export class PokeCardItemComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  view(event: any) {
    this._bottomSheet.open(PokeCardDetailComponent, {
      panelClass: 'poke-detail-bottom-sheet',
    });
  }
}
