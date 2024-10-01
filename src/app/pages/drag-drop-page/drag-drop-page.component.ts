import { Component } from '@angular/core';
import { DragDropModule } from '../../modules/drag-drop/drag-drop.module';

@Component({
  selector: 'dmly-drag-drop-page',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './drag-drop-page.component.html',
  styleUrl: './drag-drop-page.component.less'
})
export class DragDropPageComponent {
  removeItem(col: { items: number[]; }, item: any) {
    col.items = col.items.filter(i => i !== item);

  }
  onDropItem(col: { items: number[]; }, target: any) {

    console.log('🚀 ~ file: drag-drop-page.component.ts:14 ~ DragDropPageComponent ~ onDropItem ~ $event:', col, target);
    col.items.push(target)


  }
  public data = {
    rows: [
      {
        columns: [
          { items: [1, 2, 3] },
          { items: [4, 5, 6] }
        ]
      },
      {
        columns: [
          { items: [7, 8, 9] }
        ]
      },
      {
        columns: [
          { items: [10, 11, 12] }
        ]
      }
    ]
  }
}
