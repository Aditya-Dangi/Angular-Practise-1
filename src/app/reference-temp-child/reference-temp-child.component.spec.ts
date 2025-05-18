import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceTempChildComponent } from './reference-temp-child.component';

describe('ReferenceTempChildComponent', () => {
  let component: ReferenceTempChildComponent;
  let fixture: ComponentFixture<ReferenceTempChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceTempChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceTempChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
