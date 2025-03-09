import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tabContent]',
})
export class CarouselTabContentDirective {
  public template: TemplateRef<any>;

  constructor(templateRef: TemplateRef<any>, vcr: ViewContainerRef) {
    // If the directive is placed on a non-template element, create a template
    this.template = templateRef;
  }
}
