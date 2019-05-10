import { Component, OnInit } from '@angular/core'
import { SprintListService } from "./shared/sprint-list.service";
import { ToastrService } from "../common/toastr.service"



@Component({
  selector: 'sprint-list',
  template:`
      <div>
        <h2>Sprint List </h2>
        <hr>
        <story-item  
         *ngFor="let item of data"
         [templateObj]="item" 
         (eventFromChild)="handleEventFromChild($event)"
         (click)="popup(item.title)">  
              
        </story-item>
      </div>  
  `
})

export class SprintListComponent implements OnInit{
  data:any;

  constructor(private sprintListService: SprintListService, private toastr:ToastrService){

  }

  ngOnInit(){
    this.data = this.sprintListService.getSprintList();
  }

  handleEventFromChild(data){
    console.log(data)
  }

  popup(title){
    this.toastr.success(title)
  }
}