import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { HttpClientModule }from '@angular/common/http'

import{ SprintAppComponent,
        SprintListComponent,
        StoryItemComponent,
        SprintListService,
        SprintCategoryService,
        CreateSprintComponent,
        SprintDetailResolver,
        SprintDetailsComponent   } from './sprint/index'

import { NavMenuComponent } from './nav/nav-menu.component';
import {ToastrService} from "./common/toastr.service";

import {appRoutes} from "./routes/routes";
import {SprintAppRouteService} from "./routes/sprint-app-route.service";

import {Error404Component} from "./errors/error-404.component";





@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    declarations: [
      SprintAppComponent,
      SprintListComponent,
      SprintDetailsComponent,
      CreateSprintComponent,
      StoryItemComponent,
      NavMenuComponent,
      Error404Component
    ],

    providers: [ SprintListService , SprintCategoryService, SprintAppRouteService, SprintDetailResolver, ToastrService],
    bootstrap: [ SprintAppComponent ]
})

export class AppModule { }
