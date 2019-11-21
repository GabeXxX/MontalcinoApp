import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NewFieldPage} from './new-field.page';

const routes: Routes = [
    {
        path: '',
        component: NewFieldPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewFieldPageRoutingModule {
}
