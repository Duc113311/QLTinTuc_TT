import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdanhmucComponent } from './newdanhmuc.component';

describe('NewdanhmucComponent', () => {
  let component: NewdanhmucComponent;
  let fixture: ComponentFixture<NewdanhmucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdanhmucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdanhmucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
