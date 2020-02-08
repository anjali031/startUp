import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamentsComponent } from './ornaments.component';

describe('OrnamentsComponent', () => {
  let component: OrnamentsComponent;
  let fixture: ComponentFixture<OrnamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrnamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
