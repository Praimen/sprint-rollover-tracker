import { TestBed, async } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import{
  SprintAppComponent,

} from '../index';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprintAppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SprintAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sprint-rollover-tracking'`, () => {
    const fixture = TestBed.createComponent(SprintAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Sprint Rollover Tracking');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SprintAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Sprint Rollover Tracking!');
  });
});
