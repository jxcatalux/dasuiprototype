import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { NgModule } from '@angular/core';
import { SearchStartComponent } from './home/search-start/search-start.component';
import { SearchListComponent } from './home/search-list/search-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // children: [
    //  { path: '', component: SearchStartComponent},
    //  { path: 'results', component: SearchListComponent}
  
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

//export const appRoutingModule = RouterModule.forRoot(routes);


@NgModule({
  imports: [
     RouterModule.forRoot(appRoutes, {useHash: true})
 ],
 exports: [RouterModule]
})

export class AppRoutingModule {

}
