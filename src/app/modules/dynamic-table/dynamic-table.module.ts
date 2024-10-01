import { NgModule } from '@angular/core';
import { DynamicTableCellComponent } from './dynamic-table-cell/dynamic-table-cell.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';



@NgModule({
  declarations: [DynamicTableComponent, DynamicTableCellComponent],
  exports: [DynamicTableComponent]
})
export class DynamicTableModule { }
