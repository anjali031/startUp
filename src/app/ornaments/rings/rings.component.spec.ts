import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingsComponent } from './rings.component';

describe('RingsComponent', () => {
  let component: RingsComponent;
  let fixture: ComponentFixture<RingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
