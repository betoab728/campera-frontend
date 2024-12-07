import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietAddComponent } from './diet-add.component';

describe('DietAddComponent', () => {
  let component: DietAddComponent;
  let fixture: ComponentFixture<DietAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
