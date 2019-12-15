import {Injectable} from '@angular/core';
import {Field} from './field.model';
import {UniqueIdService} from './unique-id.service';
import {BehaviorSubject, of} from 'rxjs';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})


export class FieldsService {
    constructor(private uniqueId: UniqueIdService, private httpClient: HttpClient) {
    }

    // Subject are Observable with which we can emit a new event ourself
    // with next(). In pratica Behaviur Subject chiama subito next(valori iniziali)
    // non appena uno si subscribe()

    private _fields = new BehaviorSubject<Field[]>([
        new Field('Campo 1', '1', 'Coltivazione di Brunello', 'Via del Brunello 16', '/assets/fieldPreview.jpg'),
        new Field('Campo 2', '2', 'Coltivazione di Rosso', 'Via del Rosso 35', '/assets/fieldPreview.jpg'),
        new Field('Campo 3', '3', 'Coltivazione di uva da tavola', 'Via del Grappolo 18', '/assets/fieldPreview.jpg'),
        new Field('Campo 4', '4', 'Coltivazione di uva bianca', 'Via della Vite 2', '/assets/fieldPreview.jpg'),
    ]); // Behaviur subject are subject with initial value

    get fields() {
        // return this.httpClient.get<Field[]>('Http://127.0.0.1:8000/manager/fields');
        return this._fields.asObservable();
        // Return the Observable part of the Subject. A subscrible object.
        // But don't allow us to emit a new event with next() method
        // Subject inherit from Observable, but with subject we can call the next() method and emit a new event
    }

    fetchFields() {
        return this.httpClient.get<Field[]>('Http://127.0.0.1:8000/manager/fields').pipe(
            map((resData) => {
                const fields = [];
                resData.forEach((field) => {
                    fields.push(new Field(field.name,
                        field.id,
                        field.description,
                        field.position,
                        field.imagePreviewUrl,
                        field.cultivation,
                        field.owner,
                        field.area,
                        field.perimeter));
                });
                return fields;
            }), /* map() Applies a given project function to each value emitted by the source
             Observable, and emits the resulting values as an Observable.*/
            tap((fields) => {
                return this._fields.next(fields);
            })
        );
    }


    createField(name: string,
                position: string,
                description: string = null,
                imagePreviewUrl: string = '/assets/fieldPreview.jpg',
                cultivation: string = 'Vite',
                owner: string = 'Azienda Montalcino',
                area: number = null,
                perimeter: number = null) {
        const fieldId = this.uniqueId.createFieldUUID();

        const newField = new Field(
            name,
            fieldId,
            description,
            position,
            imagePreviewUrl,
            cultivation,
            owner,
            area,
            perimeter
        );

        return this.httpClient.post('Http://127.0.0.1:8000/manager/fields', {...newField})
            .pipe( /*tap(
                (data:any[]) => {
                    console.log(data);
                })*/
                switchMap((resData) => { // On each emission the previous inner observable (the result of the function you supplied) is cancelled and the new observable is subscribed.
                    return this.fields;  // return the entire array as an Observable
                }),

                take(1),  // Take only the first emission of that flux, the latest fields array
                tap((fields) => {
                    this._fields.next((fields.concat(newField)));
                }) /*Intercepts each emission on the source and runs a function,
                but returns an output which is identical to the source as long as errors don't occur.*/
            );

        /*return this.fields.pipe(take(1)).subscribe((fields) => {

            this._fields.next(
                    // Qui emettiamo valori dal subject _field
                    // in particolare emettiamo quello che passimo alla funzione next(), quindi in questo caso
                    // un nuovo array fields di Field[] con inserito al suo interno un nuovo field
                    // Questo valore verrà raccolto da tutti gli observer che si sono registrati con subscribe
                    // che lo gestiranno con la funzione next: () => {} inserita in subscribe
                    // come in questo caso
                    fields.concat(newField)
                    // Questo valore emesso diventa il parametro (fields) della funzione next: in subscribe
                    // dell' Observer fields. Quindi ogni volta che chiamiamo fields.next( value:Field[])
                    // questo ci restituirà l'array field aggiornato con il nuovo valore. In particolare ci restituirà
                    // solo l'ultimo aggiornamento grazie a pipe(take(1))
                );
            }
        );*/

        /*I can subscribe here and in that subscribe function, I pass another function
          as an argument which will execute whenever we set up the subscription
          because it's a behavior subject
          and we therefore get the latest value and whenever a new value is emitted.
          Now of course, I don't want to get all future updates,
          I only want to get the current array of places in here and for this,
          we can use yet another rxjs
          concept which are operators. Operators allow us to perform certain
          operations on our observables and
          the subject is just an observable. We add such operators by calling
          the pipe method which exists on every
          observable and therefore also on the subject
          and here we can add as many operators as we want and I will add the take operator here.
          and then here, we can call take one,
          this means is please have a look at my places subject which
          is this thing up there which in the end holds or wraps our array of
          places and please subscribe to it
          but only take one object and then automatically cancel the description
          so that I only get the current latest list of places and I don't listen to future places.

          Concat is a default Javascript array method which takes the old array on which we call it, adds
          a new place and returns a new array and that new array is what we then emit
          with the help of next. Remember that _places is a Subject that emit an array of Field[]
         */
    }

    getField(fieldId: string) {

        return this.httpClient.get(`Http://127.0.0.1:8000/manager/fields/${fieldId}/`).pipe(
            map((field: Field) => {
                return {
                    name: field.name,
                    id: field.id,
                    description: field.description,
                    position: field.position,
                    imagePreviewUrl: field.imagePreviewUrl,
                    cultivation: field.cultivation,
                    owner: field.owner,
                    area: field.area,
                    perimeter: field.perimeter
                };
            }));

        /*return this.fields.pipe(
            take(1),
            map((fields) => {
                return {...fields.find((field) => field.id === fieldId)};
            }) // Return an Observable to which we can subscribe like get fields()
            // But here our observable will have a single field, in get fields a list of field
        );*/
        /*
        I want to return a single observable here as well as in get fields()
        and therefore here I will return this places pipe
        take one but this would be the list of places or actually it would not even be that, it would be
        an observable to which we can subscribe
        which then once we subscribe gives us that list of places because we basically have everything in place
        except for the subscription.
        That's the difference to the code up there,
        here we do subscribe, down there we don't.
        But I don't want to return that list of places, I want to return a single place.
        Good thing is we can add another operator for this, we can add the filter operator,
        this allows us to filter down our array but I don't actually want to filter it down,
        I want to return exactly one element and therefore, you could simply add map here.
        What does map do? I can use map here as a second operator after take which means map
        now will get what take gives us.
        Here we pass in a function to map and that will be our array of places, the array of places take one gives
        us essentially and now I want to find only one of the places in there and return
        that so I can remove my return statement into that unction I pass to map, here instead
        of this places, I use just places which is my array of places and I can use that find logic I already had in place.
        This therefore will return a Javascript object and map then automatically wraps this in an observable
        so that what we return overall here still is an observable to which we can subscribe.
         */
    }

    removeField(fieldId: string) {
        return this.httpClient.delete(`Http://127.0.0.1:8000/manager/fields/${fieldId}/`).pipe(
            switchMap(() => {
                return this.fields;
            }),
            take(1),
            tap((fields) => {
                this._fields.next(fields.filter(field => field.id !== fieldId));
            })
        );
        /*return this.fields.pipe(take(1), tap((fields) => {
                this._fields.next(fields.filter(field => field.id !== fieldId));
            })
        );*/
    }

    updateField(
        fieldId: string,
        name: string,
        position: string,
        description: string = null,
        imagePreviewUrl: string = '/assets/fieldPreview.jpg',
        cultivation: string = 'Vite',
        owner: string = 'Azienda Montalcino',
        area: number = null,
        perimeter: number = null) {

        let updateFields: Field[];

        return this.fields.pipe(
            take(1),
            switchMap((fields) => {
                if (fields === undefined || fields.length <= 0) {
                    return this.fetchFields();
                } else {
                    return of(fields);
                }
            }),
            switchMap((fields) => {
            const updateFieldIndex = fields.findIndex((field) => field.id === fieldId);
                updateFields = [...fields];
            const oldField = updateFields[updateFieldIndex];
                updateFields[updateFieldIndex] = new Field(
                    name,
                    oldField.id,
                    description,
                    position,
                    imagePreviewUrl,
                    cultivation,
                    owner,
                    area,
                    perimeter
                );
                // option+9 for `literal concatenation operator
                return this.httpClient.put(`Http://127.0.0.1:8000/manager/fields/${fieldId}/`,
                    {...updateFields[updateFieldIndex]});
            }),
            tap(() => {
            this._fields.next(updateFields);
            })
        );
    }

}


/*
1)fullName : function() {
    return this.firstName + " " + this.lastName;
  }

2)get fullName() {
    return this.firstName + " " + this.lastName;
  }

Example 1 access fullName as a function: person.fullName().
Example 2 access fullName as a property: person.fullName.

Spread operator ...: Think of this spread thing as extracting all the individual properties
one by one and transferring them to the new object.
*/
