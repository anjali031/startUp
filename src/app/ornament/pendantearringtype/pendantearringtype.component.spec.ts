import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendantearringtypeComponent } from './pendantearringtype.component';

describe('PendantearringtypeComponent', () => {
  let component: PendantearringtypeComponent;
  let fixture: ComponentFixture<PendantearringtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendantearringtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendantearringtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
