import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Directive({
  selector: '[pokeTypeColor]', // Ensure the selector matches usage
})
export class PokeTypeColorDirective implements OnInit {
  @Input() pokeType: string = '';
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private utilService: UtilsService
  ) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.getPokeTypeColor(this.pokeType)
    );
  }

  getPokeTypeColor(type: string) {
    return this.utilService.getColorByPokeType(type);
  }
}
