/**
 * Created by b16552 on 5/9/2019.
 */
/**
 * Created by b16552 on 5/9/2019.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class SprintCategoryService{

    getCatClass(categoryID:any) {
        return sprintCategories[categoryID].cssclass;
    }

    getCatLabel(categoryID:any) {
        return sprintCategories[categoryID].label;
    }
}


const sprintCategories:any = {
    sc: {
        label: 'Scope Creep',
        cssclass: 'scope-creep'
    },
    ed: {
        label: 'External Dependence',
        cssclass: 'ext-dep'
    },
    nrw: {
        label: 'Not Ready to Work',
        cssclass: 'not-ready'
    }
};

