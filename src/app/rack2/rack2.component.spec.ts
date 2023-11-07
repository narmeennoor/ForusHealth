import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rack2Component } from './rack2.component';

describe('Rack2Component', () => {
  let component: Rack2Component;
  let fixture: ComponentFixture<Rack2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rack2Component]
    });
    fixture = TestBed.createComponent(Rack2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
