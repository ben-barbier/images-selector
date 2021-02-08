import { Component } from '@angular/core';
import { Labels } from 'images-selector';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public readonly labels: Labels = {
        add: 'Ajouter des images',
        upload: 'Importer des images',
    };

    private readonly baseURL = new URL('https://street-fighter-moves.tech-homies.io/assets/characters');

    public readonly pictures: URL[] = [
        new URL('ryu_thumbnail.png', this.baseURL),
        new URL('ken_thumbnail.png', this.baseURL),
        new URL('e-honda_thumbnail.png', this.baseURL),
    ];
}
