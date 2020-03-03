import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarupdateComponent } from './earupdate.component';

describe('EarupdateComponent', () => {
  let component: EarupdateComponent;
  let fixture: ComponentFixture<EarupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
