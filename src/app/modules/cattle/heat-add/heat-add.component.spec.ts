import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatAddComponent } from './heat-add.component';

describe('HeatAddComponent', () => {
  let component: HeatAddComponent;
  let fixture: ComponentFixture<HeatAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
