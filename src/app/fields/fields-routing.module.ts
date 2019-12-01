import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FieldsPage} from './fields.page';


const routes: Routes = [
    {
        path: '',
        component: FieldsPage
    },

    {
        path: 'new-field',
        loadChildren: () => import('./new-field/new-field.module').then(m => m.NewFieldPageModule)
    },
    {
        path: ':fieldId',
        loadChildren: () => import('./field-details/field-details.module').then(m => m.FieldDetailsPageModule)
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FieldsPageRoutingModule {
}
