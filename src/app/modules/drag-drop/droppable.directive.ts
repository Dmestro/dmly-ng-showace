import { Directive, ElementRef, EventEmitter, Input, Output } from "@angular/core";
import { DragDropEvent, DragDropService, DRAGGABLE_EVENTS, DROPPABLE_EVENTS } from "./drag-drop.service";
import { DragDropData } from "./drag-drop.types";

@Directive({
    selector: "[droppable]",
})
export class DroppableDirective {


    @Input() droppableType!: string;

    @Output() dropped: EventEmitter<any> = new EventEmitter();

    constructor(
        private _elementRef: ElementRef,
        private dndService: DragDropService,
    ) {
    }

    ngOnInit() {
        let el = this._elementRef.nativeElement;

        this.dndService.eventBus.subscribe((e: DragDropEvent) => {
            switch (e.type) {
                case DRAGGABLE_EVENTS.dragStart: {
                    if (e?.payload?.droppableType === this.droppableType) {
                        el.classList.add("active-droppable-container");
                    }
                    break;
                }
                case DRAGGABLE_EVENTS.dragEnd: {
                    el.classList.remove("active-droppable-container");
                    break;
                }
            }
        });

        el.addEventListener("dragenter", (e: DragEvent) => {
            e.stopPropagation();
            el.classList.add("hovered-container");

        });

        el.addEventListener("dragleave", (e: DragEvent) => {
            e.stopPropagation();
            if ((e.currentTarget as any).contains(e.relatedTarget)) {
                return;
            }
            el.classList.remove("hovered-container");

        });

        el.addEventListener("dragover", (e: DragEvent) => {
            if (e.preventDefault) {
                e.preventDefault();
            }

            if (e.dataTransfer) {
                e.dataTransfer.dropEffect = "move";
            }

            return false;
        });


        el.addEventListener("drop", (e: any) => {

            el.classList.remove("hovered-container");
            let data: DragDropData = JSON.parse(e.dataTransfer.getData("text"));

            if (data.allowedDroppableType === this.droppableType) {

                if (e.stopPropagation) {
                    e.stopPropagation();
                }

                this.dropped.emit(data.data);
                this.dndService.fireEvent({
                    type: DROPPABLE_EVENTS.drop,
                    payload: data,
                })
            }

            return false;
        })
    }

}
