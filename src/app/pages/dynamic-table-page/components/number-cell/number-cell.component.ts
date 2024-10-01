import { Component, OnInit } from '@angular/core';
import { TableCellComponent } from '../../../../modules/dynamic-table/abstract-table-cell.directive';


@Component({
  selector: 'app-number-cell',
  templateUrl: './number-cell.component.html',
  styleUrls: ['./number-cell.component.less']
})
export class NumberCellComponent extends TableCellComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
