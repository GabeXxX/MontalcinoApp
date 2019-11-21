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
                loadChildren: './list-fields/list-fields.module#ListFieldsPageModule'
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
        path: '',
        redirectTo: '/fields/tabs',
        pathMatch: 'full'
    },
    {
        path: 'list-fields',
        loadChildren: () => import('./list-fields/list-fields.module').then(m => m.ListFieldsPageModule)
    },
    {
        path: 'img-fields',
        loadChildren: () => import('./img-fields/img-fields.module').then(m => m.ImgFieldsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FieldsPageRoutingModule {
}
