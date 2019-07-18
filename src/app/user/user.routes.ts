/**
 * Created by b16552 on 6/19/2019.
 */
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { Routes } from "@angular/router";



export const userRoutes: Routes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
];