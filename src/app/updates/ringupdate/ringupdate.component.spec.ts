import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingupdateComponent } from './ringupdate.component';

describe('RingupdateComponent', () => {
  let component: RingupdateComponent;
  let fixture: ComponentFixture<RingupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
