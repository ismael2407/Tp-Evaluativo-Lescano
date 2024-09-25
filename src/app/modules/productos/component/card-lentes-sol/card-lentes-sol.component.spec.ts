import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLentesSolComponent } from '../card-lentes-contacto/card-lentes-sol.componentd-lentes-sol.component';

describe('CardLentesSolComponent', () => {
  let component: CardLentesSolComponent;
  let fixture: ComponentFixture<CardLentesSolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLentesSolComponent]
    });
    fixture = TestBed.createComponent(CardLentesSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
