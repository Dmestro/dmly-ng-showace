import { Type } from "@angular/core";
import { TableCellComponent } from './abstract-table-cell.directive';

export interface DynamicTableCellConfig {
	type: string,
	component: Type<TableCellComponent>
}

export interface DynamicTableContentConfig {
	rowConfig: {
		cellConfigs: DynamicTableCellConfig[]
	}
}

export interface DynamicTableConfig {
	headerConfig: string[]
	contentConfig: DynamicTableContentConfig;
}

export type DynamicTableData = Array<Array<any>>;