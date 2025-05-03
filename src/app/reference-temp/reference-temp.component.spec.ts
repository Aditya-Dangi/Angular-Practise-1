import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceTempComponent } from './reference-temp.component';

describe('ReferenceTempComponent', () => {
  let component: ReferenceTempComponent;
  let fixture: ComponentFixture<ReferenceTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
