import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsCitizenComponent } from './as-citizen.component';

describe('AsCitizenComponent', () => {
  let component: AsCitizenComponent;
  let fixture: ComponentFixture<AsCitizenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsCitizenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
