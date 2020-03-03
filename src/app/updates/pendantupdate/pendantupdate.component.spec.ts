import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendantupdateComponent } from './pendantupdate.component';

describe('PendantupdateComponent', () => {
  let component: PendantupdateComponent;
  let fixture: ComponentFixture<PendantupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendantupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendantupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
