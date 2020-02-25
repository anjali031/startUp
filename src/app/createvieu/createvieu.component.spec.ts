import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevieuComponent } from './createvieu.component';

describe('CreatevieuComponent', () => {
  let component: CreatevieuComponent;
  let fixture: ComponentFixture<CreatevieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatevieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatevieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
