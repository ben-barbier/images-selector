import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

interface Item {
    id: number;
    color: string;
}

@Component({
    selector: 'lib-images-selector',
    templateUrl: 'images-selector.component.html',
    styleUrls: ['./images-selector.component.scss'],
})
export class ImagesSelectorComponent implements OnInit {
    isDragging = false;

    list1: Item[] = [{ id: 1, color: 'red' }];
    list2: Item[] = [{ id: 2, color: 'yellow' }];
    list3: Item[] = [{ id: 3, color: 'deepskyblue' }];
    list4: Item[] = [{ id: 4, color: 'greenyellow' }];
    list5: Item[] = [{ id: 5, color: 'mediumpurple' }];
    list6: Item[] = [];

    constructor() {}

    ngOnInit(): void {}

    // drop($event: CdkDragDrop<T, any>) {
    drop(event: CdkDragDrop<Item[]>): void {
        if (event.container.data.length) {
            transferArrayItem(event.previousContainer.data, event.container.data, 0, 1);
            transferArrayItem(event.container.data, event.previousContainer.data, 0, 0);
            moveItemInArray(event.previousContainer.data, 1, 0);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, 0, 0);
        }
    }

    dragStarted(): void {
        this.isDragging = true;
    }

    dragEnded(): void {
        this.isDragging = false;
    }
}
