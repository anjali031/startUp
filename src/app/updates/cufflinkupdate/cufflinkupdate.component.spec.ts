import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CufflinkupdateComponent } from './cufflinkupdate.component';

describe('CufflinkupdateComponent', () => {
  let component: CufflinkupdateComponent;
  let fixture: ComponentFixture<CufflinkupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CufflinkupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CufflinkupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
