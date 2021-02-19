import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ImagePreview, Labels } from './images-selector.models';

@Component({
    selector: 'lib-images-selector',
    templateUrl: 'images-selector.component.html',
    styleUrls: ['./images-selector.component.scss'],
})
export class ImagesSelectorComponent implements OnChanges {
    @Input() maxPicture = 3;
    @Input() labels: Labels;
    @Input() pictures: URL[] = [];
    @Output() requestPictures = new EventEmitter<void>();

    imagePreviews: ImagePreview[] = [];
    isNative = false; // TODO: delete

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        this.imagePreviews = this.pictures.map(picture => ({
            url: picture.toString(),
            // TODO: gérer loading / status
            loading: false,
            status: 'OK',
        }));
    }

    // enter = (drag: CdkDrag, drop: CdkDropList): boolean => {
    //     console.log('enter');
    //     return true;
    // };

    drop(): void {
        console.log('drop');
    }

    removeImage(imagePreview: ImagePreview): void {
        this.imagePreviews = this.imagePreviews.filter(ip => ip.url !== imagePreview.url);
        debugger;
    }

    public enter(event): void {
        console.log('enter2');
        debugger;
    }
}
