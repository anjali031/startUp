import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainpendatupdateComponent } from './chainpendatupdate.component';

describe('ChainpendatupdateComponent', () => {
  let component: ChainpendatupdateComponent;
  let fixture: ComponentFixture<ChainpendatupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainpendatupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainpendatupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
