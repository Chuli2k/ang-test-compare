import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp49Component } from './comp49.component';

describe('Comp49Component', () => {
  let component: Comp49Component;
  let fixture: ComponentFixture<Comp49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp49Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
