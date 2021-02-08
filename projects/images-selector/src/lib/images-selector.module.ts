import {NgModule} from '@angular/core';
import {ImagesSelectorComponent} from './images-selector.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ImagesSelectorComponent],
  imports: [DragDropModule],
  exports: [ImagesSelectorComponent]
})
export class ImagesSelectorModule {
}
