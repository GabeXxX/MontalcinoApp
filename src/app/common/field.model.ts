import {Operation} from './operation.model';

export class Field {

    constructor(public name: string,
                public position: string,
                public id: string,
                public description: string = null,
                public operations: Operation[] = [],
                public imagePreviewUrl: string = '/assets/fieldPreview.jpg',
                public area: number = null,
                public perimeter: number = null,
                public cultivation: string = 'Vite',
                public owner: string = 'Azienda Montalcino',
    ) {

    }
}
