import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildsChildComponent } from './view-childs-child.component';

describe('ViewChildsChildComponent', () => {
  let component: ViewChildsChildComponent;
  let fixture: ComponentFixture<ViewChildsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
