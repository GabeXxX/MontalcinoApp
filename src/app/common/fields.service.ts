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

    private _fields = new BehaviorSubject<Field[]>([]);

    get fields() {
        return this._fields.asObservable();
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
                        field.elevation));
                });
                return fields;
            }),
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
                elevation: number = null) {
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
            elevation
        );

        return this.httpClient.post('Http://127.0.0.1:8000/manager/fields', {...newField})
            .pipe(
                switchMap((resData) => {
                    return this.fields;
                }),

                take(1),
                tap((fields) => {
                    this._fields.next((fields.concat(newField)));
                })
            );

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
                    elevation: field.elevation
                };
            }));


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
        elevation: number = null) {

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
                    elevation
                );

                return this.httpClient.put(`Http://127.0.0.1:8000/manager/fields/${fieldId}/`,
                    {...updateFields[updateFieldIndex]});
            }),
            tap(() => {
            this._fields.next(updateFields);
            })
        );
    }

}

