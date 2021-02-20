import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ImagesSelectorComponent } from './images-selector.component';

@NgModule({
    declarations: [ImagesSelectorComponent],
    imports: [CommonModule, DragDropModule, MatProgressSpinnerModule],
    exports: [ImagesSelectorComponent],
})
export class ImagesSelectorModule {}
