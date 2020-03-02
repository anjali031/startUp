import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadspecificComponent } from './readspecific.component';

describe('ReadspecificComponent', () => {
  let component: ReadspecificComponent;
  let fixture: ComponentFixture<ReadspecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadspecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadspecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
