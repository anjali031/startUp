import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendantearringComponent } from './pendantearring.component';

describe('PendantearringComponent', () => {
  let component: PendantearringComponent;
  let fixture: ComponentFixture<PendantearringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendantearringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendantearringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
