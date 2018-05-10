import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcontactpersonComponent } from './addcontactperson.component';

describe('AddcontactpersonComponent', () => {
  let component: AddcontactpersonComponent;
  let fixture: ComponentFixture<AddcontactpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcontactpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcontactpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
