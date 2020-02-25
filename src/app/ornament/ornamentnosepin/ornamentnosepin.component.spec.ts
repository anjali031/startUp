import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamentnosepinComponent } from './ornamentnosepin.component';

describe('OrnamentnosepinComponent', () => {
  let component: OrnamentnosepinComponent;
  let fixture: ComponentFixture<OrnamentnosepinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrnamentnosepinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnamentnosepinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
