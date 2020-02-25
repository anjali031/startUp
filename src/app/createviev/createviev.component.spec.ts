import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevievComponent } from './createviev.component';

describe('CreatevievComponent', () => {
  let component: CreatevievComponent;
  let fixture: ComponentFixture<CreatevievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatevievComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatevievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
