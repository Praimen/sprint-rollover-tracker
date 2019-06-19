/**
 * Created by b16552 on 5/16/2019.
 */
import {Injectable} from "@angular/core";
import {Resolve, ActivatedRoute} from "@angular/router";
import {map} from "rxjs/internal/operators";
import {SprintListService} from "../shared/sprint-list.service";


@Injectable()
export class SprintDetailResolver implements Resolve<any>{

    constructor(
        private sprintService: SprintListService){

    }
    resolve(){
        //return this.sprintService.getSprintList().pipe(map(sprintItem => sprintItem));

        return this.sprintService.getSprintListPromise().then((val) => val);
    }

}
