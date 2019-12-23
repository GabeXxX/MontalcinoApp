import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacadeService} from '../../common/facade.service';
import {ModalController, NavController} from '@ionic/angular';
import {GoogleMapsComponent} from '../google-maps/google-maps.component';
import {HttpClient} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';
import {FieldLocation} from '../../common/location.model';
import {of} from 'rxjs';


@Component({
    selector: 'app-new-field',
    templateUrl: './new-field.page.html',
    styleUrls: ['./new-field.page.scss'],
})
export class NewFieldPage implements OnInit {

    private form: FormGroup;
    private defPosition = '';
    private selectedLocationImage = '/assets/fieldPreview.jpg';

    constructor(private facadeService: FacadeService, private navCtrl: NavController, private modalCtrl: ModalController, private http: HttpClient) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            position: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.min(1)]

            }),
            description: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.maxLength(180)]

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
    }


    onCreateField() {
        console.log(this.form);
        this.facadeService.createField(this.form.value.name,
            this.form.value.position,
            this.form.value.description,
            this.selectedLocationImage,
            this.form.value.cultivation,
            this.form.value.owner,
            this.form.value.area,
            this.form.value.elevation).subscribe(() => {
            this.navCtrl.pop();
        });


    }

    async presentModal() {
        const modal = await this.modalCtrl.create({
            component: GoogleMapsComponent
        });
        modal.onDidDismiss().then((result) => {
            if (!result.data) {
                return;
            }
            const pickedLocation: FieldLocation = {
                lat: result.data.lat,
                lng: result.data.lng,
                address: null,
                staticMapUrl: null,
                zoom: 18
            };
            this.getAddress(result.data.lat, result.data.lng).pipe(switchMap((address) => {
                    this.defPosition = address;
                    pickedLocation.address = address;
                    return of(this.getMapImage(result.data.lat, result.data.lng, 18));
                })
            ).subscribe((staticMapImgUrl) => {
                pickedLocation.staticMapUrl = staticMapImgUrl;
                this.selectedLocationImage = staticMapImgUrl;
            });
        });

        return await modal.present();
    }


    private getAddress(lat: number, lng: number) {
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
