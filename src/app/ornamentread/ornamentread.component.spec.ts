import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamentreadComponent } from './ornamentread.component';

describe('OrnamentreadComponent', () => {
  let component: OrnamentreadComponent;
  let fixture: ComponentFixture<OrnamentreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrnamentreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnamentreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
