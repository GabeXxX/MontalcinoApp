import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-google-maps',
    templateUrl: './google-maps.component.html',
    styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
    @ViewChild('map', {static: false}) mapElementRef: ElementRef;
    private montalcino = {lat: 43.0523035, lng: 11.4801389};


    constructor(
        private modalCtrl: ModalController,
        private renderer: Renderer2
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.getGoogleMaps()
            .then(googleMaps => {
                const mapEl = this.mapElementRef.nativeElement;
                const map = new googleMaps.Map(mapEl, {
                    center: this.montalcino,
                    zoom: 12
                });

                googleMaps.event.addListenerOnce(map, 'idle', () => {
                    this.renderer.addClass(mapEl, 'visible');
                });

                map.addListener('click', event => {
                    const selectedCoords = {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng()
                    };
                    this.modalCtrl.dismiss(selectedCoords);
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    onCancel() {
        this.modalCtrl.dismiss();
    }

    private getGoogleMaps(): Promise<any> {
        const win = window as any;
        const googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src =
                'https://maps.googleapis.com/maps/api/js?key=AIzaSyDi9qNWoPh-RGHU3yGo-xCrP7M2bIFAMR4';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = () => {
                const loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                } else {
                    reject('Google maps SDK not available.');
                }
            };
        });
    }
}
