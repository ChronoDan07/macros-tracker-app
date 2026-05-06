import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacrosBreakdownCardComponent } from './macros-breakdown-card.component';

describe('MacrosBreakdownCardComponent', () => {
  let component: MacrosBreakdownCardComponent;
  let fixture: ComponentFixture<MacrosBreakdownCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacrosBreakdownCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MacrosBreakdownCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
