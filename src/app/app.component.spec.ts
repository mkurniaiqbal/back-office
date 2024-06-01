import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    expect(component.title).toEqual('my-app');
  });

  it('should log "1" when login is called', () => {
    spyOn(console, 'log');
    component.login();
    expect(console.log).toHaveBeenCalledWith('1');
  });

  it('should call login method when button is clicked', () => {
    spyOn(component, 'login');
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button')!;
    button.click();
    expect(component.login).toHaveBeenCalled();
  });
});
