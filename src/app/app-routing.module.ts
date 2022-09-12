import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'payments',
        loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule)
    },
    {
        path: 'help',
        loadChildren: () => import('./modules/help/help.module').then(m => m.HelpModule)
    },
    {
        path: 'blog',
        loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
    },
    {
        path: 'signup',
        loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
