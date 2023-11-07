import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rack2shelf2Component } from './rack2shelf2.component';

describe('Rack2shelf2Component', () => {
  let component: Rack2shelf2Component;
  let fixture: ComponentFixture<Rack2shelf2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rack2shelf2Component]
    });
    fixture = TestBed.createComponent(Rack2shelf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
