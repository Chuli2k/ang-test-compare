import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp88Component } from './comp88.component';

describe('Comp88Component', () => {
  let component: Comp88Component;
  let fixture: ComponentFixture<Comp88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp88Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
