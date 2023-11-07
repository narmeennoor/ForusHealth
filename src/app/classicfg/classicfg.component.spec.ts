import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicfgComponent } from './classicfg.component';

describe('ClassicfgComponent', () => {
  let component: ClassicfgComponent;
  let fixture: ComponentFixture<ClassicfgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicfgComponent]
    });
    fixture = TestBed.createComponent(ClassicfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
