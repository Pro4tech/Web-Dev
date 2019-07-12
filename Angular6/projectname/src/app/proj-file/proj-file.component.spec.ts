import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjFileComponent } from './proj-file.component';

describe('ProjFileComponent', () => {
  let component: ProjFileComponent;
  let fixture: ComponentFixture<ProjFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
