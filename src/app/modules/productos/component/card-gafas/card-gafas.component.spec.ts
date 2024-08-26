import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGafasComponent } from './card-gafas.component';

describe('CardGafasComponent', () => {
  let component: CardGafasComponent;
  let fixture: ComponentFixture<CardGafasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardGafasComponent]
    });
    fixture = TestBed.createComponent(CardGafasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
