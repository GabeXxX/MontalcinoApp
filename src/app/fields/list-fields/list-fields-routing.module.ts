import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListFieldsPage} from './list-fields.page';

const routes: Routes = [
    {
        path: '',
        component: ListFieldsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ListFieldsPageRoutingModule {
}
