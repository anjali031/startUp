import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnamentcufflinkComponent } from './ornamentcufflink.component';

describe('OrnamentcufflinkComponent', () => {
  let component: OrnamentcufflinkComponent;
  let fixture: ComponentFixture<OrnamentcufflinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrnamentcufflinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrnamentcufflinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
