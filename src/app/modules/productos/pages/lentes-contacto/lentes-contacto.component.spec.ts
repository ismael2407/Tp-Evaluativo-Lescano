import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LentesContactoComponent } from './lentes-contacto.component';

describe('LentesContactoComponent', () => {
  let component: LentesContactoComponent;
  let fixture: ComponentFixture<LentesContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LentesContactoComponent]
    });
    fixture = TestBed.createComponent(LentesContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
