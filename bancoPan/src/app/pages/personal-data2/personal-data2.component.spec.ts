import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalData2Component } from './personal-data2.component';

describe('PersonalData2Component', () => {
  let component: PersonalData2Component;
  let fixture: ComponentFixture<PersonalData2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalData2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalData2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
