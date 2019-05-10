/**
 * Created by b16552 on 5/9/2019.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class SprintListService{
    getSprintList(){
        return SPRINTDATA;
    }

    getSprintItem(id:string){
        return SPRINTDATA.find(sprintItem => sprintItem.id === id)
    }
}

const SPRINTDATA = [
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
];