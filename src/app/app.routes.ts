import { Routes } from '@angular/router';

export const routes: Routes = [
     {path:"", redirectTo:"/page",pathMatch:"full"},
    { path: 'page', loadChildren: () => import('./page/page-module').then(m => m.PageModule) },
];
