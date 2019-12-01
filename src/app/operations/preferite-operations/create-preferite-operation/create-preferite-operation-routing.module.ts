import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CreatePreferiteOperationPage} from './create-preferite-operation.page';

const routes: Routes = [
    {
        path: '',
        component: CreatePreferiteOperationPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreatePreferiteOperationPageRoutingModule {
}
