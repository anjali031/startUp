import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateViewComponent } from './create-view.component';

describe('CreateViewComponent', () => {
  let component: CreateViewComponent;
  let fixture: ComponentFixture<CreateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
