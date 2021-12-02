import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp102Component } from './comp102.component';

describe('Comp102Component', () => {
  let component: Comp102Component;
  let fixture: ComponentFixture<Comp102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
