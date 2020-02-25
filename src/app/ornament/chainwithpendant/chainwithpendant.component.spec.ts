import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainwithpendantComponent } from './chainwithpendant.component';

describe('ChainwithpendantComponent', () => {
  let component: ChainwithpendantComponent;
  let fixture: ComponentFixture<ChainwithpendantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainwithpendantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainwithpendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
