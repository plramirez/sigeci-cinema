import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utils/auth.guard';
import { WelcomeCardComponent } from './pages/welcome-card/welcome-card.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeCardComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
    //canActivate: [AuthGuard],
    //data: {expectedRole: 'ADMIN'},
    // children: [
    //   {

    //     path: 'admin',
    //     loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
    //   }
    // ]
  },
  {
    path: 'guest',
    loadChildren: () => import('./pages/guest/guest.module').then(m => m.GuestModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
