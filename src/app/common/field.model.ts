export class Field {

    constructor(public name: string,
                public id: string,
                public description: string = 'Descrizione campo',
                public position: string = 'Posizione non definita',
                public imagePreviewUrl: string = '/assets/fieldPreview.jpg',
                public cultivation: string = 'Vite',
                public owner: string = 'Azienda Montalcino',
                public area: string = '100',
                public perimeter: string = '1000'
    ) {

    }
}
