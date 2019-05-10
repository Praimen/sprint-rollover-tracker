/**
 * Created by b16552 on 5/9/2019.
 */
import {Router, ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {SprintListService} from "../sprint/shared/sprint-list.service";


@Injectable()
export class SprintAppRouteService {

    constructor(private sprintListService: SprintListService, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot){
        const eventExists = !!this.sprintListService.getSprintItem(route.params['id'])

        if(!eventExists){
            this.router.navigate(['/404']);
            console.log('hey this should be 404');
        }
    }

}