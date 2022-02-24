import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', redirectTo: 'etages', pathMatch: 'full'
  },
  {
    path: 'etages',
    children:[
      {
        path: '',
        loadChildren: () => import('./etages/etages.module').then( m => m.EtagesPageModule)
    },
    {
      path: ':etageId',
      loadChildren: () => import('./etages/etage-info/etage-info.module').then( m => m.EtageInfoPageModule)
    },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
