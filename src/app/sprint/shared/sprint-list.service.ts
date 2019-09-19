/**
 * Created by b16552 on 5/9/2019.
 */
import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/internal/operators";
import {ISprint} from "./sprint.model";



@Injectable()
export class SprintListService{
    private sprintList:any;
    constructor(private http:HttpClient){

    }

    getSprintList() {
       return this.http.get('http://localhost:8282/api/sprint-tracker/sprint-list.json')
        .pipe(catchError(this.handleError('getEvents',[])))

    }

    getSprintListObs():Observable<any> {
        return this.http.get<any>('http://localhost:8282/api/sprint-tracker/sprint-list.json')
            .pipe(catchError(this.handleError('getEvents', [])))

    }

    private handleError(operation = 'operation', result?){
        return (error :any):any => {
            console.error('here is the error:',error);
            return (result);
        }
    }


    getSprintListPromise(){
        return this.getSprintList().toPromise();
        /*return new Promise((resolve, reject) => {

                if (!SPRINTDATA) {
                    reject('error'); // pass values
                } else {
                    resolve(SPRINTDATA);
                }

        });*/



    }



}
/*
const SPRINTDATA:ISprint[] = [
    {
        uid: 12345,
        id: 'PA-12345',
        title: 'Moving Javascipt Out of An Existing File',
        category: 'sc',
        reason: 'The 270 testing took long than the sprint anticipated',
        sprintrollovers: 2,
        initsize: 3,
        actsize: 18

    },
    {
        uid: 15995,
        id: 'PA-15995',
        title: 'Updating Car Alerts',
        category: 'ed',
        reason: 'Business Decisions were being made based on 3rd party input',
        sprintrollovers: 5,
        initsize: 8,
        actsize: 21

    },
    {
        uid: 20099,
        id: 'PA-15995',
        title: 'Updating PD',
        category: 'nrw',
        reason: 'Business trying to settle on PD messaging deep into sprint',
        sprintrollovers: 5,
        initsize: 8,
        actsize: 21

    }
];*/
