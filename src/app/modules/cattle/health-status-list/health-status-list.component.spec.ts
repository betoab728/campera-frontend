import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthStatusListComponent } from './health-status-list.component';

describe('HealthStatusListComponent', () => {
  let component: HealthStatusListComponent;
  let fixture: ComponentFixture<HealthStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthStatusListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
