import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ornament1multiselectComponent } from './ornament1multiselect.component';

describe('Ornament1multiselectComponent', () => {
  let component: Ornament1multiselectComponent;
  let fixture: ComponentFixture<Ornament1multiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ornament1multiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ornament1multiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
