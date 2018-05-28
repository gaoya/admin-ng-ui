import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcbComponent } from './bcb.component';

describe('BcbComponent', () => {
  let component: BcbComponent;
  let fixture: ComponentFixture<BcbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
