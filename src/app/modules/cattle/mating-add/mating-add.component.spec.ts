import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatingAddComponent } from './mating-add.component';

describe('MatingAddComponent', () => {
  let component: MatingAddComponent;
  let fixture: ComponentFixture<MatingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatingAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
