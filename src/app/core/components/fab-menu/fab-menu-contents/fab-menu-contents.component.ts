import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fab-menu-contents',
  templateUrl: './fab-menu-contents.component.html',
  styleUrls: ['./fab-menu-contents.component.scss'],
})
export class FabMenuContentsComponent implements OnInit {
  isMenuOpen = false;
  constructor(
    @Inject('overlayRef') private overlayRef: OverlayRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isMenuOpen = true;
    }, 10); //to prevent load immediately and wait for the animation to process
  }

  closeOverlay() {
    this.isMenuOpen = false;
    setTimeout(() => this.overlayRef.detach(), 300);
  }

  clickButton(button: number) {
    console.debug(button);
    if (button == 1) {
      this.router.navigate(['/home']);
      this.closeOverlay();
      return;
    }

    if (button == 2) {
      this.router.navigate(['/items']);
      this.closeOverlay();
      return;
    }

    /**
     * TODO: "Moves" Page
     */

    this.closeOverlay();
  }
}
