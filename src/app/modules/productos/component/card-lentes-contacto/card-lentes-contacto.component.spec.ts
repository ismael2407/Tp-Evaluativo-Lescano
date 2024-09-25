import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLentesContactoComponent } from './card-lentes-contacto.component';

describe('CardLentesContactoComponent', () => {
  let component: CardLentesContactoComponent;
  let fixture: ComponentFixture<CardLentesContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLentesContactoComponent]
    });
    fixture = TestBed.createComponent(CardLentesContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
