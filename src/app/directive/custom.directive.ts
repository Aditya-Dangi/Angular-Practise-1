import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    console.log(this.el);
    console.log(this.el.nativeElement);
    console.log(this.renderer);
  }

  ngOnInit(): void {
    /* this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black'); */
  }

  @Input() bgColor = 'black';

  @HostBinding('style.backgroundColor') background = this.bgColor;

  @HostListener('mouseenter') onMouseEnter(){
    this.background = this.bgColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.background = 'black';
  }

  /* 

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#0A0F2C');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
  } */

  
}
