import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { RoomComponent } from './room/question-room.component';
import {LoginComponent } from   './account/login.component';
import { AuthGuard } from './_helpers';

//const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    {path: '', component:LoginComponent},
    { path: 'home', component: HomeComponent },    
    {path:'questionroom', component:RoomComponent },
    //{ path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }