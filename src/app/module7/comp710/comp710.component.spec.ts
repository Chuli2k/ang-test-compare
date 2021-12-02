import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp710Component } from './comp710.component';

describe('Comp710Component', () => {
  let component: Comp710Component;
  let fixture: ComponentFixture<Comp710Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp710Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
