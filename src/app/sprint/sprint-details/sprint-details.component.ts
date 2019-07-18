/**
 * Created by b16552 on 5/9/2019.
 */
import {Component, OnInit} from "@angular/core"

import {SprintCategoryService} from "../shared/sprint-category.service";
import {ActivatedRoute} from "@angular/router";
import { ISprint } from "../shared/index"




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
    sprintObj:ISprint[];
    sprintCatService:any;
    routeId: any;
    constructor(

        private catService:SprintCategoryService,
        private route:ActivatedRoute
    ){

    }



    ngOnInit(){
        this.routeId = '' + this.route.snapshot.params['id'];

        this.sprintCatService = this.catService;
        this.sprintObj = this.route.snapshot.data['sprintItem'];

        this.sprintItem = this.sprintObj.find(sprintItem => sprintItem.id == this.routeId)
        console.log('is there any sprintItem ' , this.sprintItem)




    }



}