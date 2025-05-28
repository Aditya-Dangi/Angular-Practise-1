import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})

export class CustomIfDirective {

  //1. what to add or remove
  //2. from where to add or remove
  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input('appCustomIf') set displayView(condition: boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.template);
    }else{
      this.viewContainer.clear();
    }
  }
}
