import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSigninSignupComponent } from './form-signin-signup.component';

describe('FormSigninSignupComponent', () => {
  let component: FormSigninSignupComponent;
  let fixture: ComponentFixture<FormSigninSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSigninSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSigninSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
