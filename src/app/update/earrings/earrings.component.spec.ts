import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarringsComponent } from './earrings.component';

describe('EarringsComponent', () => {
  let component: EarringsComponent;
  let fixture: ComponentFixture<EarringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
