import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomAppclass]'
})
export class CustomAppclassDirective {

  @Input('appCustomAppclass') levelType!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    let color = '';

    switch (this.levelType?.toLowerCase()) {
      case 'basic':
        color = '#fffd73';          
        break;
      case 'intermediate':
        color = '#ffc73c';          
        break;
      case 'advanced':
        color = '#ff7373';          
        break;
    }    

    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
