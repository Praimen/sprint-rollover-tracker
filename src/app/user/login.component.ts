/**
 * Created by b16552 on 7/18/2019.
 */
import {Component} from '@angular/core'


@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {

   login(formValues){
       console.log(formValues);
   }

    cancel() {
        this.router.navigate(['/sprints'])
    }


}