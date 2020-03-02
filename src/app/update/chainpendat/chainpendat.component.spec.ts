import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainpendatComponent } from './chainpendat.component';

describe('ChainpendatComponent', () => {
  let component: ChainpendatComponent;
  let fixture: ComponentFixture<ChainpendatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainpendatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainpendatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
