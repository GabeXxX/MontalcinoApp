import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FieldInfoPage} from './field-info.page';

const routes: Routes = [
    {
        path: '',
        component: FieldInfoPage
    },
    {
        path: 'update-field-info',
        loadChildren: () => import('./update-field-info/update-field-info.module').then(m => m.UpdateFieldInfoPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FieldInfoPageRoutingModule {
}
