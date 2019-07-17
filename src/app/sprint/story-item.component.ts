/**
 * Created by b16552 on 4/25/2019.
 */
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core'
import {SprintCategoryService} from "./shared/sprint-category.service";

@Component({
    selector: 'story-item',
    template: ` 
        <div [routerLink]="['/sprints',templateObj.id]" class="col-md-5 hoverwell well thumbnail pad-left">
            <h4>{{templateObj.title}}</h4>
            <h5>{{templateObj.id}}</h5>
            <hr>
            <div class="story-attr"><label>Rollover Category:</label> <div class="story-cat-value" [ngClass]="sprintCatService.getCatClass(templateObj.category)">{{sprintCatService.getCatLabel(templateObj.category)}}</div></div>
            <div class="story-attr" *ngIf="templateObj.reason"><label>Rollover Reason:</label> {{templateObj.reason}}</div>
            <div class="story-attr"><label>Sprint Rollover Count:</label> {{templateObj.sprintrollovers}}</div>
            <div class="story-attr"><label>Inital size:</label> {{templateObj.initsize}}</div> 
            <div class="story-attr"><label>Actual size:</label> {{templateObj.actsize}}</div> 
         
            <div class="button-row">
                <button class="btn btn-success sml" (click)="handleClickMe()">Click Me</button>
            </div>
        </div>      
    `,
    styles:[`
               
    `]
})

export class StoryItemComponent implements OnInit{
   @Input() templateObj:any;
   @Output() eventFromChild = new EventEmitter();

    categoryObj:any;
    sprintCatService:any;
    constructor(private catService:SprintCategoryService){

    }

    ngOnInit(){
        this.sprintCatService = this.catService
    }



    handleClickMe(){
        this.eventFromChild.emit(this.templateObj)
    }


}