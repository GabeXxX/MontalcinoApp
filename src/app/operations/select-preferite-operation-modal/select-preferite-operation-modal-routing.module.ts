import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SelectPreferiteOperationModalPage} from './select-preferite-operation-modal.page';

const routes: Routes = [
    {
        path: '',
        component: SelectPreferiteOperationModalPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SelectPreferiteOperationModalPageRoutingModule {
}
