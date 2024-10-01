import { Component, OnInit } from '@angular/core';
import { TableCellComponent } from '../../../../modules/dynamic-table/abstract-table-cell.directive';

@Component({
  selector: 'app-text-cell-component',
  templateUrl: './text-cell-component.component.html',
  styleUrls: ['./text-cell-component.component.less']
})
export class TextCellComponent extends TableCellComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
