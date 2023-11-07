import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rack3shelf3Component } from './rack3shelf3.component';

describe('Rack3shelf3Component', () => {
  let component: Rack3shelf3Component;
  let fixture: ComponentFixture<Rack3shelf3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rack3shelf3Component]
    });
    fixture = TestBed.createComponent(Rack3shelf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
