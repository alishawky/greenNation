import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';
import { ScreenService } from '../_services/screen.service';


@Directive({ selector: '[screenBelowLarge]' })
export class ScreenBelowLargeDirective implements OnDestroy {
  private hasView = false;
  private screenSubscription: Subscription;

  constructor(private viewContainer: ViewContainerRef,
    private template: TemplateRef<Object>,
    private screenService: ScreenService) {

    this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());

  }

  @Input()
  set screenBelowLarge(condition) {
    // ignore the passed condition and set it based on screen size
    condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;

    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

  ngOnDestroy() {
    this.screenSubscription.unsubscribe();
  }

  onResize() {
    // trigger the setter
    this.screenBelowLarge = false;
  }
}
