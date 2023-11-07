import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rack1Component } from './rack1.component';

describe('Rack1Component', () => {
  let component: Rack1Component;
  let fixture: ComponentFixture<Rack1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rack1Component]
    });
    fixture = TestBed.createComponent(Rack1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
