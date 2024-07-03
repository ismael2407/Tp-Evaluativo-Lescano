import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GafasComponent } from './gafas.component';

describe('GafasComponent', () => {
  let component: GafasComponent;
  let fixture: ComponentFixture<GafasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GafasComponent]
    });
    fixture = TestBed.createComponent(GafasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
