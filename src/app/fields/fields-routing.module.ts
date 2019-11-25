import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FieldsPage} from './fields.page';


const routes: Routes = [
    {
        path: 'tabs',
        component: FieldsPage,
        children: [
            {
                path: 'listView',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./list-fields/list-fields.module').then(m => m.ListFieldsPageModule)
                    }
                ]
            },
            {
                path: 'imgView',
                loadChildren: './img-fields/img-fields.module#ImgFieldsPageModule'
            },
            {
                path: '',
                redirectTo: '/fields/tabs/listView',
                pathMatch: 'full'
            }

        ]
    },
    {
        path: 'new-field',
        loadChildren: () => import('./new-field/new-field.module').then(m => m.NewFieldPageModule)
    },
    {
        path: '',
        redirectTo: '/fields/tabs/listView',
        pathMatch: 'full'
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
