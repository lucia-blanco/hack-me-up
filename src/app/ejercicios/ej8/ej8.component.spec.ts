import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej8Component } from './ej8.component';

describe('Ej8Component', () => {
  let component: Ej8Component;
  let fixture: ComponentFixture<Ej8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
