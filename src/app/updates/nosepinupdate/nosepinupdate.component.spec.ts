import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosepinupdateComponent } from './nosepinupdate.component';

describe('NosepinupdateComponent', () => {
  let component: NosepinupdateComponent;
  let fixture: ComponentFixture<NosepinupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosepinupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosepinupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
