import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRequerimientoComponent } from './detalle-requerimiento.component';

describe('DetalleRequerimientoComponent', () => {
  let component: DetalleRequerimientoComponent;
  let fixture: ComponentFixture<DetalleRequerimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleRequerimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
