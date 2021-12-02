import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp110Component } from './comp110.component';

describe('Comp110Component', () => {
  let component: Comp110Component;
  let fixture: ComponentFixture<Comp110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
