import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'fields', pathMatch: 'full'},
    {
        path: 'fields',
        loadChildren: () => import('./fields/fields.module').then(m => m.FieldsPageModule)
  },
  {
      path: 'operations',
      loadChildren: () => import('./operations/operations.module').then(m => m.OperationsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
