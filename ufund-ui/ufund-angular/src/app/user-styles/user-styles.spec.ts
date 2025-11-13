import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStyles } from './user-styles';

describe('UserStyles', () => {
  let component: UserStyles;
  let fixture: ComponentFixture<UserStyles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserStyles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStyles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
