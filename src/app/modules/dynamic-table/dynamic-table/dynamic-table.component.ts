import { Component, Input } from '@angular/core';
import { DynamicTableConfig, DynamicTableData } from '../model';

@Component({
  selector: 'dmly-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.less'
})
export class DynamicTableComponent {
  @Input() tableConfig!: DynamicTableConfig;
  @Input() tableData!: DynamicTableData;
}
