import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainupdateComponent } from './chainupdate.component';

describe('ChainupdateComponent', () => {
  let component: ChainupdateComponent;
  let fixture: ComponentFixture<ChainupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
