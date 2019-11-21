import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'campi', pathMatch: 'full'},
  {
    path: 'campi',
    loadChildren: () => import('./campi/campi.module').then(m => m.CampiPageModule)
  },
  {
    path: 'operazioni',
    loadChildren: () => import('./operazioni/operazioni.module').then(m => m.OperazioniPageModule)
  },
  {
    path: 'segnalazioni',
    loadChildren: () => import('./segnalazioni/segnalazioni.module').then(m => m.SegnalazioniPageModule)
  },
  {
    path: 'meteo',
    loadChildren: () => import('./meteo/meteo.module').then(m => m.MeteoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
