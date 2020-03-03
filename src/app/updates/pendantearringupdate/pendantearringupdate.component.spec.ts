import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendantearringupdateComponent } from './pendantearringupdate.component';

describe('PendantearringupdateComponent', () => {
  let component: PendantearringupdateComponent;
  let fixture: ComponentFixture<PendantearringupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendantearringupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendantearringupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
