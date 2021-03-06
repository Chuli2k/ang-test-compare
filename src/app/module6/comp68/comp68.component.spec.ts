import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp68Component } from './comp68.component';

describe('Comp68Component', () => {
  let component: Comp68Component;
  let fixture: ComponentFixture<Comp68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp68Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
