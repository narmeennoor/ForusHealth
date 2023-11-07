import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shelf1Component } from './shelf1.component';

describe('Shelf1Component', () => {
  let component: Shelf1Component;
  let fixture: ComponentFixture<Shelf1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Shelf1Component]
    });
    fixture = TestBed.createComponent(Shelf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
