import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimkiemTtComponent } from './timkiem-tt.component';

describe('TimkiemTtComponent', () => {
  let component: TimkiemTtComponent;
  let fixture: ComponentFixture<TimkiemTtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimkiemTtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimkiemTtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
