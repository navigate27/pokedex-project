import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'poke-type-color',
  templateUrl: './poke-type-color.component.html',
  styleUrls: ['./poke-type-color.component.scss'],
})
export class PokeTypeColorComponent implements OnInit {
  @Input() types: any;
  constructor(private utilService: UtilsService) {}

  ngOnInit(): void {}

  getPokeTypeColor(type: string) {
    return this.utilService.getColorByPokeType(type);
  }
}
