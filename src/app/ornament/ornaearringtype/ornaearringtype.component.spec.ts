import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnaearringtypeComponent } from './ornaearringtype.component';

describe('OrnaearringtypeComponent', () => {
  let component: OrnaearringtypeComponent;
  let fixture: ComponentFixture<OrnaearringtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrnaearringtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnaearringtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
