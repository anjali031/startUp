import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsupdateComponent } from './setsupdate.component';

describe('SetsupdateComponent', () => {
  let component: SetsupdateComponent;
  let fixture: ComponentFixture<SetsupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetsupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
