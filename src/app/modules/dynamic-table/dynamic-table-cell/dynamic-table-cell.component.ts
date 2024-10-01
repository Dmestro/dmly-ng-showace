import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicTableCellConfig } from '../model';

@Component({
  selector: 'dmly-dynamic-table-cell',
  templateUrl: './dynamic-table-cell.component.html',
  styleUrl: './dynamic-table-cell.component.less'
})
export class DynamicTableCellComponent implements OnInit {


  @Input() public cellData: any;
  @Input() public cellConfig!: DynamicTableCellConfig;

  @ViewChild("cellContainer", { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.createComponent();
  }

  createComponent() {
    //quite old example, should be replaced by actual api call
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(this.cellConfig.component);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.value = this.cellData;
  }

}
