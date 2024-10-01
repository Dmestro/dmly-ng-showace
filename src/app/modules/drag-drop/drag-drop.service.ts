import { Injectable } from '@angular/core';
import { Subject } from "rxjs";


export enum DRAGGABLE_EVENTS {
    dragStart,
    dragEnd
}

export enum DROPPABLE_EVENTS {
    dragEnter,
    dragLeave,
    dragOver,
    drop,
}

export type DragDropEvent = {
    type: DRAGGABLE_EVENTS | DROPPABLE_EVENTS;
    payload?: any;
}

@Injectable({
  providedIn: 'root'
})
export class DragDropService {

    private eventBus$: Subject<DragDropEvent> = new Subject<DragDropEvent>();

  constructor() {}

  public get eventBus() {
      return this.eventBus$.asObservable();
  }

  public fireEvent(event: DragDropEvent) {
      this.eventBus$.next(event);
  }
}
