import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoInicioComponent } from './ingreso-inicio.component';

describe('IngresoInicioComponent', () => {
  let component: IngresoInicioComponent;
  let fixture: ComponentFixture<IngresoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
