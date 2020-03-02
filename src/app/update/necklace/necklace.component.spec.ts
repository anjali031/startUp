import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NecklaceComponent } from './necklace.component';

describe('NecklaceComponent', () => {
  let component: NecklaceComponent;
  let fixture: ComponentFixture<NecklaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecklaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecklaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
