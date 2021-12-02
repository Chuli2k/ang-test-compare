import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp108Component } from './comp108.component';

describe('Comp108Component', () => {
  let component: Comp108Component;
  let fixture: ComponentFixture<Comp108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comp108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
