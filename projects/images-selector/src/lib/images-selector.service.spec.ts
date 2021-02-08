import { TestBed } from '@angular/core/testing';
import { ImagesSelectorService } from './images-selector.service';

describe('ImagesSelectorService', () => {
    let service: ImagesSelectorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ImagesSelectorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
