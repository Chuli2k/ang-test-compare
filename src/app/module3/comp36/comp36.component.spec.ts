import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp36Component } from './comp36.component';

describe('Comp36Component', () => {
  let component: Comp36Component;
  let fixture: ComponentFixture<Comp36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
