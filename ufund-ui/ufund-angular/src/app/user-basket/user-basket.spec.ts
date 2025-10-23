import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasket } from './user-basket';

describe('UserBasket', () => {
  let component: UserBasket;
  let fixture: ComponentFixture<UserBasket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserBasket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBasket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
