import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth-module/components/login/login.component';
import { RegisterComponent } from './auth-module/components/register/register.component';

import { ProfileComponent } from './profile-module/components/profile/profile.component';

import { AuthGuard } from './common-module/guards/guard.guard';
import { CatalogComponent } from './catalog-module/components/catalog/catalog.component';


const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'products',
    canLoad: [ AuthGuard ],
    loadChildren: () => import('./products-module/products.module').then( m => m.ProductsModule )
  },
  { path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard ] },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }