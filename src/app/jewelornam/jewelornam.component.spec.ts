import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelornamComponent } from './jewelornam.component';

describe('JewelornamComponent', () => {
  let component: JewelornamComponent;
  let fixture: ComponentFixture<JewelornamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelornamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelornamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
