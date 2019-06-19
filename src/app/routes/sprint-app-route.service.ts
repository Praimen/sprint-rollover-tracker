/**
 * Created by b16552 on 5/9/2019.
 */
import {Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {SprintListService} from "../sprint/shared/sprint-list.service";




@Injectable()
export class SprintAppRouteService implements CanActivate{
    private sprintObj:any;
    private sprintItem:any;
    private routeExists:any;
    private route:any;

    constructor(private sprintListService: SprintListService, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot, route1:RouterStateSnapshot):boolean{
        this.route = route;
        var router = this.router;


        //console.log('outside', this.sprintListService.getSprintList());
        this.routeExists = this.sprintListService.getSprintListPromise().then((sprintItems)=>
                        {
                            var routeBool = false;
                            console.log('sprintItems', typeof sprintItems);
                            console.log('Completed', route1.url);

                            for(let keys in sprintItems){
                                let sprintItem = sprintItems[keys];
                                console.log('sprintItem', sprintItems[keys])
                                if(sprintItem.id == route.params['id']){
                                    routeBool = true;
                                }
                            }

                            if(!routeBool){
                                router.navigate(['/404']);
                                console.log('hey this should be 404');
                            }

                            return routeBool

                    }).catch((err) =>{
                            console.error('Error: ' + err);

                    })



        console.log('route exists ', this.routeExists)
        return this.routeExists;
    }





}