import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp73Component } from './comp73.component';

describe('Comp73Component', () => {
  let component: Comp73Component;
  let fixture: ComponentFixture<Comp73Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp73Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
