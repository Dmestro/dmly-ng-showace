import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableCellComponent } from './dynamic-table-cell.component';

describe('DynamicTableCellComponent', () => {
  let component: DynamicTableCellComponent;
  let fixture: ComponentFixture<DynamicTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicTableCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
