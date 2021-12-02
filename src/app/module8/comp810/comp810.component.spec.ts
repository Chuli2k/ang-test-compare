import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp810Component } from './comp810.component';

describe('Comp810Component', () => {
  let component: Comp810Component;
  let fixture: ComponentFixture<Comp810Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp810Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
