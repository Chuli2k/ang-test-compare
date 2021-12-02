import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp410Component } from './comp410.component';

describe('Comp410Component', () => {
  let component: Comp410Component;
  let fixture: ComponentFixture<Comp410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp410Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
