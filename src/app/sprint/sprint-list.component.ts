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
         (eventFromChild)="handleEventFromChild($event)" >  
              
        </story-item>
      </div>  
  `
})

export class SprintListComponent implements OnInit{
  data:any;

  constructor(private sprintListService: SprintListService, private toastr:ToastrService){

  }

  ngOnInit(){
   /* this.sprintListService.getSprintListPromise().then(data => {
        this.data = data;
    });*/

    this.sprintListService.getSprintListObs().subscribe(data => this.data = data)
  }

  handleEventFromChild(data){
    console.log(data)
    this.popup(data.title)
  }

  popup(title){
    this.toastr.success(title)
  }
}