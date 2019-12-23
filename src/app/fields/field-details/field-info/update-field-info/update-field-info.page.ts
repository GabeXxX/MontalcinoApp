import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Field} from '../../../../common/field.model';
import {FacadeService} from '../../../../common/facade.service';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import {of} from 'rxjs';
import {GoogleMapsComponent} from '../../../google-maps/google-maps.component';
import {FieldLocation} from '../../../../common/location.model';
import {map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-update-field-info',
    templateUrl: './update-field-info.page.html',
    styleUrls: ['./update-field-info.page.scss'],
})
export class UpdateFieldInfoPage implements OnInit, OnDestroy {

    private form: FormGroup;
    private field: Field;
    private defPosition = '';
    private selectedLocationImage = '/assets/fieldPreview.jpg';
    private isLoading = false;


    constructor(private facadeService: FacadeService,
                private activatedRoute: ActivatedRoute,
                private navController: NavController,
                private modalCtrl: ModalController,
                private http: HttpClient) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            position: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]

            }),
            description: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]

            }),
            area: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            elevation: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            cultivation: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            owner: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            })

        });

        this.isLoading = true;
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('fieldId')) {
                this.navController.navigateBack('/fields');
                return;
            }
            this.facadeService.getField(paramMap.get('fieldId')).subscribe((field) => {
                this.field = field;
                this.defPosition = this.field.position;
                this.selectedLocationImage = this.field.imagePreviewUrl;
                this.isLoading = false;
            });


        });
    }

    onUpdateField() {
        this.facadeService.updateField(
            this.field.id,
            this.form.value.name,
            this.form.value.position,
            this.form.value.description,
            this.selectedLocationImage,
            this.form.value.cultivation,
            this.form.value.owner,
            this.form.value.area,
            this.form.value.elevation)
            .subscribe((responseData) => {
                console.log(responseData);
                this.navController.pop();
            });


    }

    ngOnDestroy(): void {

    }

    async presentModal() {
        const modal = await this.modalCtrl.create({
            component: GoogleMapsComponent
        });
        modal.onDidDismiss().then((result) => {
            if (!result.data) {
                return;
            }
            console.log(result);
            const pickedLocation: FieldLocation = {
                lat: result.data.lat,
                lng: result.data.lng,
                address: null,
                staticMapUrl: null,
                zoom: 18
            };
            this.getAddress(result.data.lat, result.data.lng).pipe(switchMap((address) => {
                    console.log(address);
                    this.defPosition = address;
                    pickedLocation.address = address;
                    return of(this.getMapImage(result.data.lat, result.data.lng, 18));
                })
            ).subscribe((staticMapImgUrl) => {
                console.log(staticMapImgUrl);
                pickedLocation.staticMapUrl = staticMapImgUrl;
                this.selectedLocationImage = staticMapImgUrl;
            });
        });

        return await modal.present();
    }

    private getAddress(lat: number, lng: number) {
        // tslint:disable-next-line:max-line-length
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyDi9qNWoPh-RGHU3yGo-xCrP7M2bIFAMR4')
            .pipe(map((geoData: any) => {
                if (!geoData || !geoData.results || geoData.results.length === 0) {
                    return null;
                }
                return geoData.results[0].formatted_address;
            }));
    }

    private getMapImage(lat: number, lng: number, zoom: number) {
        // tslint:disable-next-line:max-line-length
        return ('https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng + '&zoom=' + zoom + '&size=800x600&maptype=hybrid' +
            '&markers=color:red%7Clabel:Field%7C+' + lat + ',' + lng +
            '&key=AIzaSyDi9qNWoPh-RGHU3yGo-xCrP7M2bIFAMR4');
    }


}
