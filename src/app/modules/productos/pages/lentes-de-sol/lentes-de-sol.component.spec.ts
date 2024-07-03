import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LentesDeSolComponent } from './lentes-de-sol.component';

describe('LentesDeSolComponent', () => {
  let component: LentesDeSolComponent;
  let fixture: ComponentFixture<LentesDeSolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LentesDeSolComponent]
    });
    fixture = TestBed.createComponent(LentesDeSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
