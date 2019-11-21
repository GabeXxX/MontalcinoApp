import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FieldsPage} from './fields.page';


const routes: Routes = [
    {
        path: '',
        redirectTo: './tabs',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        component: FieldsPage,
        children: [
            {
                path: '',
                redirectTo: './listView',
                pathMatch: 'full'
            },
            {
                path: 'listView',
                loadChildren: './list-fields/list-fields.module#ListFieldsPageModule'
            },
            {
                path: 'imgView',
                loadChildren: './img-fields/img-fields.module#ImgFieldsPageModule'
            }

        ]
    },
    {
        path: 'new-field',
        loadChildren: () => import('./new-field/new-field.module').then(m => m.NewFieldPageModule)
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FieldsPageRoutingModule {
}
