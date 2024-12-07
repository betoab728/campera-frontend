import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatListComponent } from './heat-list.component';

describe('HeatListComponent', () => {
  let component: HeatListComponent;
  let fixture: ComponentFixture<HeatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
