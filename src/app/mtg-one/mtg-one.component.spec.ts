import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgOneComponent } from './mtg-one.component';

describe('MtgOneComponent', () => {
  let component: MtgOneComponent;
  let fixture: ComponentFixture<MtgOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtgOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtgOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
