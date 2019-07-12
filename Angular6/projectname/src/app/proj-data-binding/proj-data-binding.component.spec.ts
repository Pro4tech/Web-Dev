import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjDataBindingComponent } from './proj-data-binding.component';

describe('ProjDataBindingComponent', () => {
  let component: ProjDataBindingComponent;
  let fixture: ComponentFixture<ProjDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
