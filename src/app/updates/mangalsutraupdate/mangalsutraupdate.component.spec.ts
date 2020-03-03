import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangalsutraupdateComponent } from './mangalsutraupdate.component';

describe('MangalsutraupdateComponent', () => {
  let component: MangalsutraupdateComponent;
  let fixture: ComponentFixture<MangalsutraupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangalsutraupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangalsutraupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
