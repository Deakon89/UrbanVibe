import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CommentsComponent } from './component/comments/comments.component';
import { ProfileComponent } from './component/profile/profile.component';
;


export const routes: Routes = [
    {path: '', component: HomeComponent, children: [
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent},    
        {path: 'profile', component: ProfileComponent},  
    ]},
    {path: 'comments', component: CommentsComponent},
    
    ];
    




           
    