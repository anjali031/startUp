import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NecklaceupdateComponent } from './necklaceupdate.component';

describe('NecklaceupdateComponent', () => {
  let component: NecklaceupdateComponent;
  let fixture: ComponentFixture<NecklaceupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecklaceupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecklaceupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
