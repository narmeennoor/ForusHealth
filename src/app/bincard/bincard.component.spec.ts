import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BincardComponent } from './bincard.component';

describe('BincardComponent', () => {
  let component: BincardComponent;
  let fixture: ComponentFixture<BincardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BincardComponent]
    });
    fixture = TestBed.createComponent(BincardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
