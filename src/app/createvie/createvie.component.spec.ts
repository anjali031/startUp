import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevieComponent } from './createvie.component';

describe('CreatevieComponent', () => {
  let component: CreatevieComponent;
  let fixture: ComponentFixture<CreatevieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatevieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatevieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
