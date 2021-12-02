import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp105Component } from './comp105.component';

describe('Comp105Component', () => {
  let component: Comp105Component;
  let fixture: ComponentFixture<Comp105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
