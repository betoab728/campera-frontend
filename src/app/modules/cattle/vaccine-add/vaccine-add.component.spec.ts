import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineAddComponent } from './vaccine-add.component';

describe('VaccineAddComponent', () => {
  let component: VaccineAddComponent;
  let fixture: ComponentFixture<VaccineAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaccineAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccineAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
