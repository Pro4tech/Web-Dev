import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjAddressComponent } from './proj-address.component';

describe('ProjAddressComponent', () => {
  let component: ProjAddressComponent;
  let fixture: ComponentFixture<ProjAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
