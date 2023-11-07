import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgComponent } from './fg.component';

describe('FgComponent', () => {
  let component: FgComponent;
  let fixture: ComponentFixture<FgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FgComponent]
    });
    fixture = TestBed.createComponent(FgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
