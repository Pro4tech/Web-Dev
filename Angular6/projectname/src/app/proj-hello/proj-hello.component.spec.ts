import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjHelloComponent } from './proj-hello.component';

describe('ProjHelloComponent', () => {
  let component: ProjHelloComponent;
  let fixture: ComponentFixture<ProjHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
