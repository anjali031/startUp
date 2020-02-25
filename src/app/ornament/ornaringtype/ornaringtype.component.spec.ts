import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnaringtypeComponent } from './ornaringtype.component';

describe('OrnaringtypeComponent', () => {
  let component: OrnaringtypeComponent;
  let fixture: ComponentFixture<OrnaringtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrnaringtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnaringtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
