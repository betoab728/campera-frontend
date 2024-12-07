import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductionAddComponent } from './reproduction-add.component';

describe('ReproductionAddComponent', () => {
  let component: ReproductionAddComponent;
  let fixture: ComponentFixture<ReproductionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReproductionAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReproductionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
