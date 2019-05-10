/**
 * Created by b16552 on 5/9/2019.
 */

import {Component} from '@angular/core'
import {Router} from "@angular/router";

@Component({
    template: ` 
       <h1>New Event</h1>   
       <hr>
       <div class="col-md-6">
           <h3>[Create Event Form will for here]</h3>
           <br><br>
           <button type="submit" class="btn btn-primary">Save</button>
           <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
       </div>
    `,
    styles: [`
          
    `]
})

export class CreateSprintComponent  {

    constructor(private router: Router) {

    }

    cancel(){
        this.router.navigate(['/sprints'])
    }


}