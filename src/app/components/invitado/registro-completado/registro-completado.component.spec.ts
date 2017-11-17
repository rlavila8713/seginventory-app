import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCompletadoComponent } from './registro-completado.component';

describe('RegistroCompletadoComponent', () => {
  let component: RegistroCompletadoComponent;
  let fixture: ComponentFixture<RegistroCompletadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroCompletadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCompletadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
