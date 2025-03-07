import { Component, Injector, OnInit } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { FabMenuContentsComponent } from './fab-menu-contents/fab-menu-contents.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'fab-menu',
  templateUrl: './fab-menu.component.html',
  styleUrls: ['./fab-menu.component.scss'],
})
export class FabMenuComponent implements OnInit {
  isFabOpen = false;
  private overlayRef: OverlayRef | undefined;

  constructor(private overlay: Overlay, private injector: Injector) {}

  ngOnInit(): void {}

  toggleFab() {
    this.isFabOpen = !this.isFabOpen;
  }

  openMenu() {
    this.isFabOpen = true;
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .bottom('10px'); // Position it at the bottom center

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true, // Add backdrop
      backdropClass: 'cdk-overlay-dark-backdrop',
    });

    const injector = Injector.create({
      providers: [{ provide: 'overlayRef', useValue: this.overlayRef }],
    });

    const menuPortal = new ComponentPortal(
      FabMenuContentsComponent,
      null,
      injector
    );
    this.overlayRef.attach(menuPortal);

    // this.overlayRef.backdropClick().subscribe(() => {
    //   this.closeMenu();
    // });
  }

  closeMenu() {
    if (this.overlayRef) {
      this.isFabOpen = false;
      this.overlayRef.dispose();
    }
  }
}
