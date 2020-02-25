import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamentmultiselectComponent } from './ornamentmultiselect.component';

describe('OrnamentmultiselectComponent', () => {
  let component: OrnamentmultiselectComponent;
  let fixture: ComponentFixture<OrnamentmultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrnamentmultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnamentmultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
