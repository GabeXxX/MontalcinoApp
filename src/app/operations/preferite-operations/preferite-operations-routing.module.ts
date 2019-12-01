import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PreferiteOperationsPage} from './preferite-operations.page';

const routes: Routes = [
    {
        path: '',
        component: PreferiteOperationsPage
    },
    {
        path: 'create-preferite-operation',
        loadChildren: () => import('./create-preferite-operation/create-preferite-operation.module').then(m => m.CreatePreferiteOperationPageModule)
    },
    {
        path: ':preferiteOperationId',
        loadChildren: () => import('./preferite-operation-details/preferite-operation-details.module').then(m => m.PreferiteOperationDetailsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PreferiteOperationsPageRoutingModule {
}
