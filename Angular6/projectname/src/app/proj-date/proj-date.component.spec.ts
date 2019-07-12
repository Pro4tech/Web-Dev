import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjDateComponent } from './proj-date.component';

describe('ProjDateComponent', () => {
  let component: ProjDateComponent;
  let fixture: ComponentFixture<ProjDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
