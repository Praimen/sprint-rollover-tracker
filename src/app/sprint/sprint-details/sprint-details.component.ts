/**
 * Created by b16552 on 5/9/2019.
 */
import {Component, OnInit} from '@angular/core'
import {SprintListService} from "../shared/sprint-list.service";
import {SprintCategoryService} from "../shared/sprint-category.service";
import {ActivatedRoute} from "@angular/router";



@Component({
    selector: 'sprint-details',
    templateUrl: './sprint-details.component.html',
    styles:[`
        .container { padding-left:20px; padding-right:20px; }
        .event-image { height: 100px; }
    
    `]
})

export class SprintDetailsComponent implements OnInit{
    sprintItem:any;
    sprintCatService:any;
    routeId:any;

    constructor(
        private sprintService:SprintListService,
        private catService:SprintCategoryService,
        private route:ActivatedRoute
    ){

    }



    ngOnInit(){
        this.routeId = ''+ this.route.snapshot.params['id'];
        this.sprintItem = this.sprintService.getSprintItem(this.routeId);
        this.sprintCatService = this.catService;
    }



}