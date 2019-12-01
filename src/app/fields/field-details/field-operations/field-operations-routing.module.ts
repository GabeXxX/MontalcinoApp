import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FieldOperationsPage} from './field-operations.page';

const routes: Routes = [
    {
        path: '',
        component: FieldOperationsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FieldOperationsPageRoutingModule {
}
