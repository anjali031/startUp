import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CufflinkComponent } from './cufflink.component';

describe('CufflinkComponent', () => {
  let component: CufflinkComponent;
  let fixture: ComponentFixture<CufflinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CufflinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CufflinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
