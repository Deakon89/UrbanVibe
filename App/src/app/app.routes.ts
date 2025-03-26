import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CommunityComponent } from './component/community/community.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
// import { authGuard } from './auth/auth.guard';



export const routes: Routes = [
    {path: '', component: HomeComponent, children: [
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent},    
        {path: 'profile', component: ProfileComponent},
        {path:"about-us", component: AboutUsComponent },
        {path: 'community', component: CommunityComponent},  
    ]},
    ];
    




           
    