/**
 * Created by b16552 on 5/9/2019.
 */

import {Component} from '@angular/core'
import {Router} from "@angular/router";

@Component({
    template: ` 
       <h1>Edit Your Profile</h1>   
       <hr>
       <div class="col-md-6">
           <h3>[Edit profile form will for here]</h3>
           <br><br>
           <button type="submit" class="btn btn-primary">Save</button>
           <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
       </div>
    `,
    styles: [`
          
    `]
})

export class ProfileComponent {

    constructor(private router: Router) {

    }

    cancel() {
        this.router.navigate(['/sprints'])
    }


}
