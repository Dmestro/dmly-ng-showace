import { Component } from '@angular/core';
import { DynamicTableModule } from '../../modules/dynamic-table/dynamic-table.module';
import { DynamicTableConfig, DynamicTableData } from '../../modules/dynamic-table/model';
import { TextCellComponent } from './components/text-cell-component/text-cell-component.component';
import { NumberCellComponent } from './components/number-cell/number-cell.component';
import { BooleanCellComponent } from './components/boolean-cell/boolean-cell.component';

@Component({
  selector: 'dmly-dynamic-table-page',
  standalone: true,
  imports: [DynamicTableModule],
  templateUrl: './dynamic-table-page.component.html',
  styleUrl: './dynamic-table-page.component.less'
})
export class DynamicTablePageComponent {
  public tableConfig: DynamicTableConfig = {
    headerConfig: ['Text col', 'Number col', 'Boolean Col'],
    contentConfig: {
      rowConfig: {
        cellConfigs: [
          {
            type: "text",
            component: TextCellComponent
          },
          {
            type: "number",
            component: NumberCellComponent
          },
          {
            type: "boolean",
            component: BooleanCellComponent
          }
        ]
      }
    }
  }

  public tableData: DynamicTableData = [
    ['text1', '11', false],
    ['text2', '22', false],
    ['text3', '33', true],

  ]

}
