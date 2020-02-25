import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangalsutraComponent } from './mangalsutra.component';

describe('MangalsutraComponent', () => {
  let component: MangalsutraComponent;
  let fixture: ComponentFixture<MangalsutraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangalsutraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangalsutraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
