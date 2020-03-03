import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanglesupdateComponent } from './banglesupdate.component';

describe('BanglesupdateComponent', () => {
  let component: BanglesupdateComponent;
  let fixture: ComponentFixture<BanglesupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanglesupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanglesupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
