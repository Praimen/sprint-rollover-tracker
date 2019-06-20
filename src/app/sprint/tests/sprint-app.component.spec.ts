import { TestBed, async } from '@angular/core/testing';
import { SprintAppComponent } from './sprint-app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SprintAppComponent
      ],
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
    expect(app.title).toEqual('sprint-rollover-tracking');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SprintAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to sprint-rollover-tracking!');
  });
});
