import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BraceletupdateComponent } from './braceletupdate.component';

describe('BraceletupdateComponent', () => {
  let component: BraceletupdateComponent;
  let fixture: ComponentFixture<BraceletupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BraceletupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BraceletupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
