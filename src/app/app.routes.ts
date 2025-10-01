import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { BlogComponent } from './feature/blog/blog.component';
import { AuthComponent } from './feature/auth/auth.component';
import { AuteurComponent } from './feature/auteur/auteur.component';
import { IntroAppComponent } from './shared/components/intro-app/intro-app.component';




export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch : 'full'},
    {path: 'blog', component: BlogComponent},
    {path: 'auteur', component: AuteurComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'intro', component: IntroAppComponent},
];
