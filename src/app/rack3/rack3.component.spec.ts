import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rack3Component } from './rack3.component';

describe('Rack3Component', () => {
  let component: Rack3Component;
  let fixture: ComponentFixture<Rack3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rack3Component]
    });
    fixture = TestBed.createComponent(Rack3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
