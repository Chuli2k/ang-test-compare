import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp107Component } from './comp107.component';

describe('Comp107Component', () => {
  let component: Comp107Component;
  let fixture: ComponentFixture<Comp107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
