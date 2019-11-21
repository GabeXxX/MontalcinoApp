import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OperazioniPage} from './operazioni.page';

const routes: Routes = [
    {
        path: '',
        component: OperazioniPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OperazioniPageRoutingModule {
}
