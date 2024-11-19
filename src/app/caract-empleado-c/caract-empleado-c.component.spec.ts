import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractEmpleadoCComponent } from './caract-empleado-c.component';

describe('CaractEmpleadoCComponent', () => {
  let component: CaractEmpleadoCComponent;
  let fixture: ComponentFixture<CaractEmpleadoCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaractEmpleadoCComponent]
    });
    fixture = TestBed.createComponent(CaractEmpleadoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
