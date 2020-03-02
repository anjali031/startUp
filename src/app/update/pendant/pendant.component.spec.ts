import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendantComponent } from './pendant.component';

describe('PendantComponent', () => {
  let component: PendantComponent;
  let fixture: ComponentFixture<PendantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
