import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FieldDetailsPage} from './field-details.page';

const routes: Routes = [
    {
        path: '',
        component: FieldDetailsPage
    },
    {
        path: 'field-info',
        loadChildren: () => import('./field-info/field-info.module').then(m => m.FieldInfoPageModule)
    },
    {
        path: 'field-operations',
        loadChildren: () => import('./field-operations/field-operations.module').then(m => m.FieldOperationsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FieldDetailsPageRoutingModule {
}
