import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private vwCntnr: ViewContainerRef,
    private tmpltRef: TemplateRef<any>
  ) {}
  @Input('appTimes') set render(times: number) {
    this.vwCntnr.clear();
    for (let ix1 = 0; ix1 < times; ix1++) {
      this.vwCntnr.createEmbeddedView(this.tmpltRef, {});
    }
  }
}
