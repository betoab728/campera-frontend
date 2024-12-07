import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatingListComponent } from './mating-list.component';

describe('MatingListComponent', () => {
  let component: MatingListComponent;
  let fixture: ComponentFixture<MatingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
