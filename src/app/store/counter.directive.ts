import {Directive,Input,SimpleChanges,TemplateRef,ViewContainerRef} from "@angular/core";

class CounterDirectiveContext {
  constructor(public $implicit: number) {}
}

@Directive({
  selector: "[counterOf]",
  standalone: false
})
export class CounterDirective {
  @Input("counterOf")
  public counter = 0;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<CounterDirectiveContext>
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.container.clear();

    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(
        this.template,
        new CounterDirectiveContext(i + 1)
      );
    }
  }

  static ngTemplateContextGuard(
    directive: CounterDirective,
    context: unknown
  ): context is CounterDirectiveContext {
    return true;
  }
}