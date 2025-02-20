import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; 
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

export const routes: Routes = [
    {path: '', component: UserListComponent},
    {path: 'Userdetail', component: UserDetailsComponent},
];
