import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; 
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'User', component: UserListComponent},
    {path: 'User/:id', component: UserDetailsComponent},
    {path: 'user-form', component: UserFormComponent}
];
