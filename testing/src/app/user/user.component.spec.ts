import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  let dataService: DataService;
  let compiled;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    dataService = fixture.debugElement.injector.get(DataService);
    compiled = fixture.debugElement.nativeElement;
    spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    // component.isLoggedIn = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should use the user name if user is logged in', () => {
    expect(compiled.querySelector('p').textContent).not.toContain(component.user.name);
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    expect(component.data).toBe(undefined);
  });

  it('should fetch data successfully if not called asynchronously', async(() => {
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    });
  }));
});
