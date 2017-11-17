import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Er500Component } from './er500.component';

describe('Er500Component', () => {
  let component: Er500Component;
  let fixture: ComponentFixture<Er500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Er500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Er500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
