import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lootbox } from './lootbox';

describe('Lootbox', () => {
  let component: Lootbox;
  let fixture: ComponentFixture<Lootbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lootbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lootbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
