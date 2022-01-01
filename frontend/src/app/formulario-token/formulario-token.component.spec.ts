import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTokenComponent } from './formulario-token.component';

describe('FormularioTokenComponent', () => {
  let component: FormularioTokenComponent;
  let fixture: ComponentFixture<FormularioTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
