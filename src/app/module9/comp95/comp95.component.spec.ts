import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp95Component } from './comp95.component';

describe('Comp95Component', () => {
  let component: Comp95Component;
  let fixture: ComponentFixture<Comp95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp95Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
