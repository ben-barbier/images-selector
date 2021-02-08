import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImagePreview, Labels } from './images-selector.models';

@Component({
    selector: 'lib-images-selector',
    templateUrl: 'images-selector.component.html',
    styleUrls: ['./images-selector.component.scss'],
})
export class ImagesSelectorComponent implements OnInit {
    @Input() maxPicture = 3;
    @Input() labels: Labels;
    @Input() pictures: URL[] = [];
    @Output() requestPictures = new EventEmitter<void>();

    imagePreviews: ImagePreview[] = [];
    isNative = false; // TODO: delete

    constructor() {}

    ngOnInit(): void {}

    enter = (drag: CdkDrag, drop: CdkDropList): boolean => {
        console.log('enter');
        return true;
    };

    drop(): void {
        console.log('drop');
    }
}
