import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SprintAppComponent } from './sprint-app.component';
import { SprintListComponent } from './sprint/sprint-list.component';
import { StoryItemComponent } from './sprint/story-item.component';
import { SprintListService } from './sprint/shared/sprint-list.service';
import { NavMenuComponent } from './nav/nav-menu.component';
import {ToastrService} from "./common/toastr.service";
import {SprintDetailsComponent} from "./sprint/sprint-details/sprint-details.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes/routes";
import {Error404Component} from "./errors/error-404.component";
import {SprintAppRouteService} from "./routes/sprint-app-route.service";
import {SprintCategoryService} from "./sprint/shared/sprint-category.service";
import {CreateSprintComponent} from "./sprint/create-sprint.component";
import {SprintDetailResolver} from "./sprint/sprint-details/sprint-details-resolver.service";



@NgModule({
  declarations: [
      SprintAppComponent,
      SprintListComponent,
      SprintDetailsComponent,

      CreateSprintComponent,
      StoryItemComponent,
      NavMenuComponent,
      Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ SprintListService , SprintCategoryService, SprintAppRouteService, SprintDetailResolver, ToastrService],
  bootstrap: [ SprintAppComponent ]
})

export class AppModule { }
