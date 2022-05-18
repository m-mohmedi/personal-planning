import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPlaningComponent } from './personal-planing.component';

describe('PersonalPlaningComponent', () => {
  let component: PersonalPlaningComponent;
  let fixture: ComponentFixture<PersonalPlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalPlaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
