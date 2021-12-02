import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1010Component } from './comp1010.component';

describe('Comp1010Component', () => {
  let component: Comp1010Component;
  let fixture: ComponentFixture<Comp1010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp1010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
