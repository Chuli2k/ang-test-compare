import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp103Component } from './comp103.component';

describe('Comp103Component', () => {
  let component: Comp103Component;
  let fixture: ComponentFixture<Comp103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
