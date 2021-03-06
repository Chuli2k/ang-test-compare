import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp48Component } from './comp48.component';

describe('Comp48Component', () => {
  let component: Comp48Component;
  let fixture: ComponentFixture<Comp48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp48Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
