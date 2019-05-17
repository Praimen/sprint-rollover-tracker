/**
 * Created by b16552 on 5/9/2019.
 */
import {Router, ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {SprintListService} from "../sprint/shared/sprint-list.service";


@Injectable()
export class SprintAppRouteService implements CanActivate{
    private sprintObj:any;
    private sprintItem:any;
    private routeExists:any;
    constructor(private sprintListService: SprintListService, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot){

         this.sprintListService.getSprintList().subscribe(
         (data) => {

         this.sprintObj = data;
         },
         (err) => {console.log(err)
         },
         () => {

             //TODO: this observable is getting in the way on initial load of vailid route ids
             console.log('Hey this is the sprintItem route object: ', this.sprintObj.find(sprintItem => sprintItem.id == route.params['id']));
             this.routeExists = !!this.sprintObj.find(sprintItem => sprintItem.id == route.params['id']);
             console.log('Hey this is the sprintItem: ', this.sprintItem);
             }
         );


        if(!this.routeExists){
            this.router.navigate(['/404']);
            console.log('hey this should be 404');
        }
        console.log('route exists', this.routeExists);
        return this.routeExists;
    }



}