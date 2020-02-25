import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiofillComponent } from './radiofill.component';

describe('RadiofillComponent', () => {
  let component: RadiofillComponent;
  let fixture: ComponentFixture<RadiofillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiofillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiofillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
