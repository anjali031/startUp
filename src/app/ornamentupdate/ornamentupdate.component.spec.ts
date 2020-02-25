import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamentupdateComponent } from './ornamentupdate.component';

describe('OrnamentupdateComponent', () => {
  let component: OrnamentupdateComponent;
  let fixture: ComponentFixture<OrnamentupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrnamentupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnamentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
