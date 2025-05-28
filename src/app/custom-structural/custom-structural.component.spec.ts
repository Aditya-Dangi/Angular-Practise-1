import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStructuralComponent } from './custom-structural.component';

describe('CustomStructuralComponent', () => {
  let component: CustomStructuralComponent;
  let fixture: ComponentFixture<CustomStructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStructuralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
