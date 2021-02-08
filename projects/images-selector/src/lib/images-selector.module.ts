import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { ImagesSelectorComponent } from './images-selector.component';

@NgModule({
    declarations: [ImagesSelectorComponent],
    imports: [DragDropModule],
    exports: [ImagesSelectorComponent],
})
export class ImagesSelectorModule {}
