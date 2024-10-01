import { Directive, Input } from "@angular/core";

@Directive({})
export abstract class TableCellComponent {
	@Input() value: any;
}