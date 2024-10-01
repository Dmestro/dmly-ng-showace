import { Component, OnInit } from '@angular/core';
import { TableCellComponent } from '../../../../modules/dynamic-table/abstract-table-cell.directive';

@Component({
  selector: 'app-boolean-cell',
  templateUrl: './boolean-cell.component.html',
  styleUrls: ['./boolean-cell.component.less']
})
export class BooleanCellComponent extends TableCellComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
