/**
 * Created by b16552 on 6/24/2019.
 */
import{
    SprintAppComponent,
    SprintListComponent,
    StoryItemComponent,
    SprintListService,
    SprintCategoryService,
    CreateSprintComponent,
    SprintDetailResolver,
    SprintDetailsComponent
} from '../index'

describe('SprintListService', () => {
    let sprintListService;

    beforeEach(() => {
       sprintListService = new SprintListService()
    });

    describe('run the SprintListService getSprintListPromise method ', () =>{

        it('getSprintListPromise() should return list as promise',() =>{
            expect(sprintListService.getSprintListPromise()).toEqual(jasmine.any(Promise));

        })
    });



});