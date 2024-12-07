import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductionListComponent } from './reproduction-list.component';

describe('ReproductionListComponent', () => {
  let component: ReproductionListComponent;
  let fixture: ComponentFixture<ReproductionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReproductionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReproductionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
