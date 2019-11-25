import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UpdateOperationPage} from './update-operation.page';

const routes: Routes = [
    {
        path: '',
        component: UpdateOperationPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UpdateOperationPageRoutingModule {
}
