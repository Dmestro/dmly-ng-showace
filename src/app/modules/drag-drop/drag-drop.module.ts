import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropService } from './drag-drop.service';
import { DraggableDirective } from './draggable.directive';
import { DroppableDirective } from './droppable.directive';



@NgModule({
  declarations: [DraggableDirective, DroppableDirective],
  providers: [DragDropService],
  exports: [DraggableDirective, DroppableDirective],
  imports: [
    CommonModule
  ]
})
export class DragDropModule { }
