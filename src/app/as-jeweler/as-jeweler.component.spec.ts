import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsJewelerComponent } from './as-jeweler.component';

describe('AsJewelerComponent', () => {
  let component: AsJewelerComponent;
  let fixture: ComponentFixture<AsJewelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsJewelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsJewelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
