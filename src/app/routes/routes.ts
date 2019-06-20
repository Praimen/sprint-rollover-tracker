/**
 * Created by b16552 on 5/9/2019.
 */

import {Routes} from '@angular/router';

import {Error404Component} from "../errors/error-404.component";
import {SprintAppRouteService} from "./sprint-app-route.service";
import {
    SprintDetailResolver,
    SprintListComponent,
    SprintDetailsComponent,
    CreateSprintComponent
    } from "../sprint/index";



export const appRoutes:Routes = [
    {path: 'sprints/create', component: CreateSprintComponent},
    {path:'sprints', component: SprintListComponent},
    {path: 'sprints/:id', component: SprintDetailsComponent, resolve: {sprintItem: SprintDetailResolver},
        canActivate:[SprintAppRouteService]
        },
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/sprints', pathMatch: 'full'},
    {path: 'user', loadChildren:'./user/user.module#UserModule'}

];