import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp25Component } from './comp25.component';

describe('Comp25Component', () => {
  let component: Comp25Component;
  let fixture: ComponentFixture<Comp25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
