import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output } from "@angular/core";
import { DragDropEvent, DragDropService, DRAGGABLE_EVENTS, DROPPABLE_EVENTS } from "./drag-drop.service";
import { DragDropData } from "./drag-drop.types";

@Directive({
    selector: '[draggable]'
})
export class DraggableDirective {


    @Input('draggableData') data: any;
    @Input('draggableAllowDropTo') containerType!: string;
    @Input("draggableCloneOnDrop") isCloneOnDrop: boolean = false;

    @Output('draggableElementMoved') elementMoved: EventEmitter<any> = new EventEmitter<any>();

    private id = Math.ceil(Math.random() * 100000);

    constructor(
        private _elementRef: ElementRef,
        private cdr: ChangeDetectorRef,
        private dndService: DragDropService,
    ) { }

    ngOnInit() {

        let el = this._elementRef.nativeElement;

        this.dndService.eventBus.subscribe((e: DragDropEvent) => {
            switch (e.type) {
                case DROPPABLE_EVENTS.drop: {
                    if (this.id === e.payload.elementId) {
                        this.elementMoved.emit(this.data);
                    }
                    break;
                }

            }
        })

        el.draggable = 'true';

        el.addEventListener('dragstart', (e: any) => {

            this.dndService.fireEvent({
                type: DRAGGABLE_EVENTS.dragStart,
                payload: {
                    droppableType: this.containerType
                }
            });

            el.classList.add('drag-src')
            e.dataTransfer.effectAllowed = 'move';

            let dataTransferData: DragDropData = {
                allowedDroppableType: this.containerType,
                elementId: this.id,
                data: this.isCloneOnDrop ? structuredClone(this.data) : this.data,
            }


            e.dataTransfer.setData('text', JSON.stringify(dataTransferData));
            e.stopPropagation();
            this.cdr.detectChanges();
        });

        // Remove the drag-src class
        el.addEventListener('dragend', (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            el.classList.remove('drag-src');

            this.dndService.fireEvent({
                type: DRAGGABLE_EVENTS.dragEnd,
            })
        });
    }

}
