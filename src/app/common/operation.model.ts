export class Operation {

    constructor(public name: string,
                public operationId: string,
                public fieldId: string,
                public description: string = 'Descrizione operazione',
                public date: string = '1/1/1970',
                public operator: string = 'Marco Rossi',
    ) {
    }
}
