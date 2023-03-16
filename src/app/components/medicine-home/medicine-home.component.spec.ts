import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineHomeComponent } from './medicine-home.component';

describe('MedicineHomeComponent', () => {
  let component: MedicineHomeComponent;
  let fixture: ComponentFixture<MedicineHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
