import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UpdateFieldInfoPage} from './update-field-info.page';

const routes: Routes = [
    {
        path: '',
        component: UpdateFieldInfoPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UpdateFieldInfoPageRoutingModule {
}
