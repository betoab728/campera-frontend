import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleAddComponent } from './cattle-add.component';

describe('CattleAddComponent', () => {
  let component: CattleAddComponent;
  let fixture: ComponentFixture<CattleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CattleAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CattleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
