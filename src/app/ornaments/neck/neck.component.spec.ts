import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckComponent } from './neck.component';

describe('NeckComponent', () => {
  let component: NeckComponent;
  let fixture: ComponentFixture<NeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
